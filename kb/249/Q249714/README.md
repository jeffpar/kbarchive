---
layout: page
title: "Q249714: MapPoint: How to Create a High Contrast Shaded Area Map"
permalink: /kb/249/Q249714/
---

## Q249714: MapPoint: How to Create a High Contrast Shaded Area Map

{% raw %}

	Article: Q249714
	Product(s): Microsoft Automap
	Version(s): WINDOWS:; :
	Operating System(s): 
	Keyword(s): kbdisplay kbtool kbui kbimu
	Last Modified: 14-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MapPoint 2000 
	- Microsoft MapPoint 2001 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you want to highlight an area on a map, such as a county or a state, in
	Microsoft MapPoint, you can highlight the area by creating a high contrast
	Shaded Area Map. By sharply contrasting the shading values between two areas,
	you can effectually highlight one of those areas.
	
	By default, the unmapped area on a MapPoint map is displayed with a gray shading.
	This gray shading may not provide enough contrast to the area that you want to
	highlight if the only area that you map is the area that you want to highlight.
	
	To work around this issue, map both the "unmapped" area (the area immediately
	surrounding the area that you want to highlight) with a zero shading value and
	the area that you want to highlight with a maximum shading value to create
	maximum contrast between the two areas.
	
	For example, to highlight Bristol County, Rhode Island:
	
	1. Start Microsoft Excel.
	
	2. Type the following data into Sheet 1 of the Excel spreadsheet:
	
	  +--------------------------------------------+
	  | County     | State         | Shading Value | 
	  +--------------------------------------------+
	  | Bristol    | Rhode Island  | 8             | 
	  +--------------------------------------------+
	  | Kent       | Rhode Island  | 0             | 
	  +--------------------------------------------+
	  | Newport    | Rhode Island  | 0             | 
	  +--------------------------------------------+
	  | Providence | Rhode Island  | 0             | 
	  +--------------------------------------------+
	  | Washington | Rhode Island  | 0             | 
	  +--------------------------------------------+
	  | Bristol    | Massachusetts | 0             | 
	  +--------------------------------------------+
	
	3. On the File menu, click Save As.
	
	4. In the "Save in" box, browse to the folder in which you want to save the
	  Excel spreadsheet.
	
	5. In the "File name" box, type "Bristol RI map" (without the quotation marks),
	  and then click Save.
	
	6. Quit Excel.
	
	7. Start MapPoint.
	
	8. On the File menu, click Import Data.
	
	9. In the "Look in" box, browse to the folder in which you saved the Excel
	  spreadsheet.
	
	10. Click to select the "Bristol RI map" file, and then click Open.
	
	11. In the Data Import wizard, click Sheet 1, click Next, and then click Finish.
	
	12. Click Shaded Area Map, and then click Next.
	
	13. Under "Show the data by," click the County option, and then click Next.
	
	14. Under Colors, click the down arrow to select the color shading scheme that
	  you want, and then click Finish.
	
	MORE INFORMATION
	================
	
	For additional information about how to create maps, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q246671 MapPoint: Helpful Web Sites for Creating Maps
	
	Additional query words: mp2000 mp2001 a-map automap
	
	======================================================================
	Keywords          : kbdisplay kbtool kbui kbimu 
	Technology        : kbHomeProdSearch kbMapptSearch kbMapPoint2000 kbMapPoint2001
	Version           : WINDOWS:; :
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
