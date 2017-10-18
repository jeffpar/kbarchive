---
layout: page
title: "Q239419: MapPoint: How to Create Shaded Area Maps"
permalink: kb/239/Q239419/
---

## Q239419: MapPoint: How to Create Shaded Area Maps

	Article: Q239419
	Product(s): Microsoft Automap
	Version(s): 
	Operating System(s): 
	Keyword(s): kbinterop kbtool kbui kbimu
	Last Modified: 14-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MapPoint 2000 
	- Microsoft MapPoint 2001 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to use Microsoft MapPoint with Microsoft Excel to
	create shaded area maps based on boundries such as counties, states, or ZIP
	codes.
	
	MORE INFORMATION
	================
	
	To create a shaded area map based on counties, states, or ZIP codes:
	
	1. Start Microsoft Excel.
	
	2. Create a workbook with the following column labels based on the type of map
	  you want to create:
	
	  +------------------------------------------------------+
	  | Map type | County | State | ZIP code | Shading value | 
	  +------------------------------------------------------+
	  | State    | No     | Yes   | No       | Yes           | 
	  +------------------------------------------------------+
	  | County   | Yes    | Yes   | No       | Yes           | 
	  +------------------------------------------------------+
	  | ZIP code | No     | No    | Yes      | Yes           | 
	  +------------------------------------------------------+
	
	  NOTE: Type your data according to the following guidelines.
	
	   - State: Type the full State name or official two-letter abbreviation.
	   - County: Type the full county name
	   - ZIP code: Type the five-digit ZIP code.
	   - Shade: Type a shade value from 1 (lightest) to 8 (darkest).
	
	For example, if you want to create a County map type, add your data to the
	workbook using the following table format:
	
	  
	  +-----------------------------------+
	  | County    | State | Shading value | 
	  +-----------------------------------+
	  | King      | Wa    | 1             | 
	  +-----------------------------------+
	  | Snohomish | Wa    | 2             | 
	  +-----------------------------------+
	  | Pierce    | Wa    | 3             | 
	  +-----------------------------------+
	  | Kitsap    | Wa    | 4             | 
	  +-----------------------------------+
	  | Mason     | Wa    | 5             | 
	  +-----------------------------------+
	  | Thurston  | Wa    | 6             | 
	  +-----------------------------------+
	
	NOTE: King, Kitsap, Mason, Pierce, Snohomish, and Thurston are the names of
	counties in Washington State and "Wa" is the abbreviation for Washington.
	
	3. On the File menu, click Exit. When you are prompted to save the changes,
	  click Yes.
	
	4. Start MapPoint.
	
	5. On the Format menu, click Data Mapping Wizard.
	
	6. Click Shaded Area Map, and then click Next.
	
	7. Click Import, and then click the Excel file that you saved in Step 3.
	
	8. If necessary, click the worksheet that contains your data.
	
	9. In the Data Import Wizard window, verify that the data appears as you expect,
	  and then click Next.
	
	10. Click Finish.
	
	  NOTE: If you want to customize the appearance of your map, click Next.
	
	Additional query words: mp2000 mp2001 multi multi-media media mm coloring colors
	
	======================================================================
	Keywords          : kbinterop kbtool kbui kbimu 
	Technology        : kbHomeProdSearch kbMapptSearch kbMapPoint2000 kbMapPoint2001
	Version           : :
	Issue type        : kbhowto
	
	=============================================================================
	
