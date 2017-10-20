---
layout: page
title: "Q286020: HOWTO: Automate Trip Routing in Microsoft MapPoint"
permalink: /kb/286/Q286020/
---

## Q286020: HOWTO: Automate Trip Routing in Microsoft MapPoint

{% raw %}

	Article: Q286020
	Product(s): Microsoft FoxPro
	Version(s): 3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbAutomation kbvfp300 kbvfp500 kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet
	Last Modified: 05-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0, used with:
	   - Microsoft MapPoint 2001 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft MapPoint is an Automation server, which means that other programs can
	control its behavior. One of these behaviors is Trip Routing, which this article
	will demonstrate.
	
	MORE INFORMATION
	================
	
	The following code provides driving instructions and maps for a trip between
	Bangor, ME and Snohomish, WA, with a stop in Riverside, RI.
	
	  *!* Q286020: HOWTO: Automate Trip Routing in Microsoft MapPoint
	  *!* This code adds three locations to a map and gives driving directions
	  *!* between them.
	
	  #DEFINE geoPrintStripMaps 3
	  #DEFINE geoPrintLandscape 1
	  #DEFINE geoPrintQualityNormal 0
	
	  LOCAL loApp, loMap, loRoute, loBgr, loPvd, loSea
	
	  loApp = CREATEOBJECT("MapPoint.Application")
	  loMap = loApp.NewMap()
	  loRoute = loMap.ActiveRoute
	
	  loBgr = loMap.Find("116 Main St., Bangor, ME  04401")
	  loRoute.Waypoints.Add(loBgr, "Bangor")
	
	  loPvd = loMap.Find("18 Turner Ave., Riverside, RI  02915")
	  loRoute.Waypoints.Add(loPvd, "Riverside")
	
	  loSea = loMap.Find("602 Avenue B, Snohomish, WA  98290")
	  loRoute.Waypoints.Add(loSea, "Snohomish")
	
	  loRoute.Calculate()
	
	  *!* The following few lines assume that you want to look at the
	  *!* map you just created before you quit the program. If not, remove the 
	  *!* .Visible line, the MESSAGEBOX call, and the opening and closing
	  *!* lines of the IF/ENDif block.
	  loApp.Visible = .T.
	
	  *!* Do not print to file, do supply a relevant title, print only 
	  *!* one copy, use strip maps format, use normal quality, use Landscape 
	  *!* orientation, do not collate, do not include legend, do include 
	  *!* Overview map, and do not make the printout faxable.
	  loMap.PrintOut(, "Stars across the land", 1, geoPrintStripMaps, ;
	     geoPrintQualityNormal, geoPrintLandscape, .F., .F., .T., .F.)
	
	  =MESSAGEBOX("Hit Enter to close MapPoint...")
	
	  IF TYPE("loApp.Visible") = "L" && Was MapPoint closed?
	     loMap.Saved = .T.  && To close without saving
	     loApp.Quit()
	  ENDif
	
	If you choose to run the code that makes the MapPoint object visible, you may
	need to move the MapPoint object to see the MessageBox dialog box.
	
	REFERENCES
	==========
	
	For more information about automating MapPoint, see the Microsoft MapPoint
	Visual Basic Reference in the Programming Information section of the MapPoint
	Help.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAutomation kbvfp300 kbvfp500 kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper
	Version           : :3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
