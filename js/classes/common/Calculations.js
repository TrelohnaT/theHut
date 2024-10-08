import Point2 from "../geometry/Point2.js";

export default class Calculations {
    constructor() {

    }

    /**
     * A---*
     * |   |
     * |   |
     * *---B
     * @param {Point2} target 
     * @param {Point2} pointA 
     * @param {Point2} pointB 
     * @returns {boolean}
     */
    static isPointBetweenThosePoints(target, pointA, pointB) {
        if ((pointA.x < target.x && target.x <= pointB.x)
            && (pointA.y < target.y && target.y <= pointB.y)) {
            return true;
        }
        return false;
    }

    /**
     * Vector between two points.
     * @param {Number} startX - position of start point on X axis
     * @param {Number} startY  - position of start point on Y axis
     * @param {Number} endX  - position of end point on X axis
     * @param {Number} endY  - position of end point on Y axis
     * @returns 
     */
    static getVectorBetweenTwoPoints(startX, startY, endX, endY) {
        return { vectorX: (endX - startX), vectorY: (endY - startY) }
    }

    /**
     * Funkce pro vypocet vzdalenosti mezi temito body
     * @param {int} x_a - pozice na X ose bodu a
     * @param {int} y_a - pozice na Y ose bodu a
     * @param {int} x_b - pozice na X ose bodu b
     * @param {int} y_b - pozice na Y ose bodu b
     */
    static lenghtBetweenTwoPoints(x_a, y_a, x_b, y_b) {
        let x_diff = x_a - x_b;
        let y_diff = y_a - y_b;

        return Math.sqrt(Math.pow(x_diff, 2) + Math.pow(y_diff, 2));
    }

    /**
     * Pythagorova veta
     * @param {int} num_1 
     * @param {int} num_2 
     * @returns 
     */
    static pythagor(num_1, num_2) {
        return Math.sqrt(Math.pow(num_1, 2) + Math.pow(num_2, 2));
    }

    /**
     * Funkce vypocita uhel mezi temito body
     * @param {int} x_a - pozice na X ose bodu a
     * @param {int} y_a - pozice na Y ose bodu a
     * @param {int} x_b - pozice na X ose bodu b
     * @param {int} y_b - pozice na Y ose bodu b
     */
    static angleBetweenTwoPoints(x_a, y_a, x_b, y_b) {
        let x_diff = x_a - x_b;
        let y_diff = y_a - y_b;

        return Math.atan2(y_diff, x_diff) * 180 / Math.PI;

    }


    /**
     *   A
     *   |\
     *   | \ 
     * b |  \ c
     *   |___\
     *  C  a  B
     * 
     * @param {Point2} point_B 
     * @param {Number} angle_B 
     * @param {Number} length_c 
     */
    static point_B_angle_B_length_c_get_point2_A(point_B, angle_B, length_c, pointAId) {

        // vypocitani delky usecky a
        let lengthA = length_c * Math.cos(angle_B * (Math.PI / 180));

        let lengthB = length_c * Math.sin(angle_B * (Math.PI / 180));

        return new Point2(pointAId, point_B.x + lengthA, point_B.y + lengthB)

    }

    /**
     * 
     * @param {Set<*>} target 
     * @param {Set<*>} toAdd 
     * @returns {Set<*>}
     */
    static addSetToSet(target, toAdd) {
        for (const tmp of toAdd) {
            target.add(tmp);
        }
        return target;
    }

    /**
     * 
     * @param {Map<>} target 
     * @param {Map<>} toAdd 
     * @returns {Map<>}
     */
    static addMapToMap(target, toAdd) {
        for(const [key,value] of toAdd) {
            target.set(key, value);
        }
        return target;
    }

}
