SET @user_lat = 50.5006;
SET @user_lon = -2.5474;

SELECT site_name, Postcode,
substring_index(location_1,'.',1) AS lat,
substring_index(location_1,'.',1) AS lon,

2*6372*ASIN(SQRT(
	POW(sin(radians((@user_lat - (SELECT lat)) / 2)),2)
    + cos(radians((SELECT lat))) * cos(radians(@user_lat))
    * POW(sin(radians((@user_lon - (SELECT lon)) / 2)),2)
)) as distance /*distance in kms*/
FROM recycling-banksRe
ORDER BY distance LIMIT 10;

