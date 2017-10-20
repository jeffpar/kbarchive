---
layout: page
title: "Q151770: INF: How to Suppress &quot;Local Port Error&quot; Dialog Boxes"
permalink: /kb/151/Q151770/
---

## Q151770: INF: How to Suppress &quot;Local Port Error&quot; Dialog Boxes

{% raw %}

	Article: Q151770
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you have created a printer for a local port (for example, LPT1) on a
	computer running Windows NT, and you want to print from an application running
	on this computer, a dialog box appears if the printer is not connected or turned
	on or is out of paper. The box says that Windows NT can't write to the port and
	asks you to either cancel or retry the print job. This is expected behavior and
	is desirable under most circumstances; however, in some cases you may not want
	these dialog boxes to appear on the user's desktop. There are steps you can take
	to suppress these dialog boxes.
	
	MORE INFORMATION
	================
	
	To suppress the dialog boxes, complete the following procedure:
	
	1. Create a second printer with exactly the same settings as the printer
	  attached locally and have it print to the same port as the local one.
	
	2. Share this second printer on the network.
	
	3. Open the Properties of the original printer.
	
	4. In the "Print to" dialog box, select "Other...".
	
	5. In the "Print Destinations" dialog box, select "Local Port" then press OK.
	
	6. In the "Port Name" dialog box, type the UNC name for the printer you shared
	  in step 2. The UNC name contains your computer name and the share name, for
	  example, "\\my_computer\laserjet2".
	
	7. Press the OK button twice to return to Print Manager.
	
	The local monitor displays the dialog box advising of a printing error only for
	users who work at the local computer and use printers that print to local ports.
	If you follow the procedure described above, the local monitor does not display
	this dialog box for the original printer since it is not printing to a local
	destination, and it does not display it for the second printer because it thinks
	that the client is coming in from the network (that is, arriving through the
	print share).
	
	Additional query words: 3.5 prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	

{% endraw %}
