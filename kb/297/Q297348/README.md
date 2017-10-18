---
layout: page
title: "Q297348: HOWTO: Display A Particular Radius with MapPoint"
permalink: kb/297/Q297348/
---

## Q297348: HOWTO: Display A Particular Radius with MapPoint

	Article: Q297348
	Product(s): Microsoft FoxPro
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbAutomation kbvfp kbvfp600 kbGrpDSFox kbCodeSnippet
	Last Modified: 05-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0, used with:
	   - Microsoft MapPoint 2002 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates how to use MapPoint to show a map that is zoomed to a
	certain distance around a particular point.
	
	MORE INFORMATION
	================
	
	MapPoint is an Automation server, which means that other programs can control
	its behavior.
	
	MapPoint controls the zoom factor with the Map.Altitude property, so it is
	necessary to convert the radius to the proper altitude. This value depends on
	the screen resolution and physical screen size.
	
	The following code demonstrates how to display the area 3 miles around De Smet,
	SD:
	
	  *!* Q297348 HOWTO: Display A Given Radius With MapPoint
	  *!*
	  *!* This code displays a map that is zoomed so that it shows a particular radius 
	  *!* around a point. The Altitude property controls the zoom factor. 
	  *!* Different screen sizes and resolutions generate different values 
	  *!* for Altitude, but this code causes the correct area to  
	  *!* appear on any system. 
	
	  *!* Conversion factor between miles and kilometers.
	  #DEFINE MILESTOKM 1.609
	
	  *!* MapPoint constants.
	  #DEFINE geoKM 1
	  #DEFINE geoShapeRadius 1009
	
	  oApp = CREATEOBJECT("MapPoint.Application")
	
	  lnRadius = 3	&& miles -- set to whatever value you want.
	  lnKMRadius = lnRadius * MILESTOKM
	          
	  oApp.Units = geoKM   && set units to kilometers
	
	  oMap = oApp.ActiveMap
	  WITH oMap
	     oLoc = .FindResults("De Smet, South Dakota").Item(1).Location
	     oPushpin = .AddPushpin(oLoc, "Little Town on the Prairie")
	     oLoc.GoTo()
	
	     .Altitude = RadiusToAltitudeKM(lnKMRadius, oMap)
	
	     *!* This code displays a circle so that you can verify the display area.  
	     oCircle = .Shapes.AddShape(geoShapeRadius, oLoc, ;
	        (lnKMRadius * 2), (lnKMRadius * 2))
	
	     .Saved = .T.  && Trick MapPoint into thinking it doesn't have to save.
	  ENDWITH
	
	  oApp.Visible = .T.
	
	  MESSAGEBOX("Hit Enter to close MapPoint.", 0, "Q297348")   
	
	  IF TYPE("oApp.Name") = "C"
	  	oApp.Quit
	  ENDif
	
	  FUNCTION RadiusToAltitudeKM
	  LPARAMETERS tnKMRadius, toMap 
	
	  lnScreenWidth = SYSMETRIC(1)   && Width in pixels
	  lnScreenHeight = SYSMETRIC(2)  && Height in pixels
	  lnPhysicalWidth = 0.35 && meters: assumes 17" monitor, which is 14" wide
	  lnPhysicalHeight = 0.2625
	
	  lnPercentW = lnScreenWidth / toMap.Width
	  lnAltitudeW = lnPercentW * tnKMRadius / (2.5 * (lnPhysicalWidth / 2))
	
	  lnPercentH = lnScreenHeight / toMap.Height
	  lnAltitudeH = lnPercentH * tnKMRadius / (2.5 * (lnPhysicalHeight / 2))
	
	  lnReturnAlt = IIF(lnAltitudeW > lnAltitudeH, lnAltitudeW, lnAltitudeH)
	
	  RETURN lnReturnAlt
	
	REFERENCES
	==========
	
	For more information about MapPoint, see the following Microsoft Web site:
	
	  Microsoft Office - MapPoint Home Page
	  http://www.microsoft.com/office/mappoint
	
	For more information about automating MapPoint, see the Microsoft MapPoint Visual
	Basic reference in the Programming Information section of the MapPoint Help.
	
	Additional query words: OLE Automation
	
	======================================================================
	Keywords          : kbAutomation kbvfp kbvfp600 kbGrpDSFox kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper
	Version           : :6.0
	Issue type        : kbhowto
	
	=============================================================================
	
