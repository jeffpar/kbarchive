---
layout: page
title: "Q256603: MapPoint: How to Dynamically Link SQL Data to a Map"
permalink: /kb/256/Q256603/
---

## Q256603: MapPoint: How to Dynamically Link SQL Data to a Map

{% raw %}

	Article: Q256603
	Product(s): Microsoft Automap
	Version(s): 
	Operating System(s): 
	Keyword(s): kbinterop kbtool kbui kbimukbfaq
	Last Modified: 14-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MapPoint 2002 
	- Microsoft MapPoint 2001 
	- Microsoft MapPoint 2000 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to dynamically link data from an SQL database to a
	map that you create in Microsoft MapPoint 2000 or Microsoft MapPoint 2001.
	
	MORE INFORMATION
	================
	
	To dynamically link data from an SQL database to a map that you create in
	MapPoint 2000 or MapPoint 2001:
	
	1. Right-click your desktop, click New, and then click Microsoft Data Link.
	
	  NOTE: If Microsoft Data Link does not appear in the list, create a file with a
	  .udl extension on your desktop.
	
	  For information about how to create a file with a specific extension,
	  double-click My Computer, click Help Topics on the Help menu, click the
	  Search tab, type "create a file type" (without the quotation marks), and then
	  click "To create a file type".
	
	2. Right-click the data link file on the desktop, and then click Properties.
	
	3. On the Provider tab, click to select "Microsoft OLE DB Provider for SQL
	  Server", and then click Next.
	
	4. In the "Select or enter a server name" box, click the SQL server to which you
	  want to connect.
	
	5. If you want to test the connection to the server, click Test Connection.
	
	6. Click OK.
	
	7. Start MapPoint 2000 or MapPoint 2001.
	
	8. On the File menu, click Link Data.
	
	9. In the "Files of type" box, click Microsoft Data Link (*.udl).
	
	10. In the "Look in" box, click Desktop.
	
	11. Click the data link file that you created in step 2, and then click Open.
	
	12. In the Data Link Wizard dialog box, click the table to which you want to
	  link, and then click Next.
	
	13. Make sure that an appropriate column heading is selected for each column,
	  and then click Next.
	
	14. Select a primary key for your data, and then click Finish.
	
	Additional query words: mp2000 mp2001 map point mp2k sequel
	
	======================================================================
	Keywords          : kbinterop kbtool kbui kbimu kbfaq
	Technology        : kbHomeProdSearch kbMapptSearch kbMapPoint2000 kbMapPoint2001 kbMapPoint2002
	Version           : :
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
