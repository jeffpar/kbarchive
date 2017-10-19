---
layout: page
title: "Q312064: MapPoint 2002: Spatial Data Import COM Add-in Available"
permalink: /kb/312/Q312064/
---

## Q312064: MapPoint 2002: Spatial Data Import COM Add-in Available

	Article: Q312064
	Product(s): Microsoft Automap
	Version(s): 
	Operating System(s): 
	Keyword(s): kbimu
	Last Modified: 05-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MapPoint 2002 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses the availability of a Spatial Data Import COM Add-in for
	Microsoft MapPoint 2002.
	
	MORE INFORMATION
	================
	
	The Spatial Data Import COM Add-in allows you to import ESRI SHAPE (.shp) files
	and MapInfo Data (.mif) files into MapPoint.
	
	The retail version of MapPoint 2002 cannot read files that are created in
	high-end geographical information systems (GIS) such as those produced by ESRI
	and MapInfo. The Spatial Data Import COM Add-in was created so that users of
	these systems could take such files and integrate them into MapPoint. It is an
	example of the extensibility that MapPoint 2002 offers with its rich object
	model.
	
	The Spatial Data Import COM Add-in uses Microsoft Visual Basic and the new
	extended MapPoint object model methods to take the native source GIS point data
	sets and import them as MapPoint Pushpin sets. The native GIS polygons,
	polylines, lines, rectangles and rounded rectangles are imported to create a
	layer of MapPoint drawing objects that are displayed on a MapPoint map. Through
	the MapPoint object model functions, you can also set the line color and size,
	shape fill color, and even move the polygons and lines behind the MapPoint road
	network.
	
	To download this add-in and learn more about it, please see the following
	Microsoft Web site:
	
	  MapPoint 2002 Spatial Data Import COM Add-in
	  (http://msdn.microsoft.com/library/default.asp?url=/library/en-us/dnmap02/html/map_ESRI.asp?frame=true)
	
	To run the COM add-in, follow these steps:
	
	1. Download the Spatial Data Import sample files.
	
	2. Start MapPoint 2002.
	
	3. On the Tools menu, click "COM Add-ins".
	
	4. Click Add, and then browse to the folder that contains the downloaded files.
	
	5. Click SpatialDataImport.dll, and then click Open.
	
	6. In the "COM add-ins" dialog box, click OK.
	
	7. On the Tools menu, click Spatial Data Import.
	
	8. Click Browse, navigate to the folder that contains the download files, select
	  a sample .shp or .mif file, and then click Open.
	
	9. In the Spatial Data Import dialog box, click Start.
	
	10. When the Status field indicates that the import procedure is complete, click
	  Close.
	
	The imported data appears on the MapPoint map.
	
	Additional query words: multi multi-media media mm
	
	======================================================================
	Keywords          : kbimu 
	Technology        : kbHomeProdSearch kbMapptSearch kbMapPoint2002
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	
