---
layout: page
title: "Q312059: Encarta 2002: Err Msg: FF Has Caused an Invalid Page Fault..."
permalink: /kb/312/Q312059/
---

## Q312059: Encarta 2002: Err Msg: FF Has Caused an Invalid Page Fault...

{% raw %}

	Article: Q312059
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbimu
	Last Modified: 12-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta Encyclopedia Deluxe 2002, version 1.0 
	- Microsoft Encarta Encyclopedia Standard 2002, version 1.0 
	- Microsoft Encarta Reference Library 2002, version 1.0 
	- Microsoft Encarta Reference Library 2002 - DVD Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you type a word in FactFinder, and then click the green arrow, you may
	receive the following error message:
	
	  FF has caused an invalid page fault in module Ole32.dll
	
	CAUSE
	=====
	
	This issue can occur if you have a version of CompuServe that uses Virtual Key.
	The Virtual Key program uses the Rpawinet.dll file, which conflicts with
	FactFinder.
	
	RESOLUTION
	==========
	
	If you no longer use CompuServe, rename the Rpawinet.dll file to resolve this
	issue.
	
	If you still use CompuServe, download the latest release of CompuServe, and then
	rename the file then to resolve this issue.
	
	Download CompuServe Update
	--------------------------
	
	To download the CompuServe update, see the following CompuServe Web site:
	
	  https://free.compuserve.com/dnld/dnld_cs2k.adp
	  (https://free.compuserve.com/dnld/dnld_cs2k.adp)
	
	Rename Rpawinet.dll
	-------------------
	
	To rename the Rpawinet.dll file, follow the steps for your Microsoft Windows
	operating system.
	
	Microsoft Windows 95 or Microsoft Windows 98:
	
	1. Click Start, point to Find, and then click Files or Folders.
	
	2. In the Named box, type "rpawinet.dll" (without the quotation marks).
	
	3. In the "Look in" box, click My Computer.
	
	4. Click Find Now.
	
	5. Right-click rpawinet.dll, and then click Rename.
	
	6. Change the name to rpawinet.old.
	
	7. Press ENTER to save the change.
	
	8. Quit the Find program.
	
	Microsoft Windows Millennium Edition (Me) or Microsoft Windows 2000:
	
	1. Click Start, point to Search, and then click For Files or Folders.
	
	2. In the "Search for files or folders named" box, type "rpawinet.dll" (without
	  the quotation marks).
	
	3. In the "Look in" box, click My Computer.
	
	4. Click Search Now.
	
	5. Right-click rpawinet.dll, and then click Rename.
	
	6. Change the name to rpawinet.old.
	
	7. Press ENTER to save the change.
	
	8. Quit the Search Results program.
	
	Microsoft Windows XP:
	
	1. Click Start, and then click Search.
	
	2. Under "What do you want to search for?", click All files and folders.
	
	3. In the "All or part of the file name" box, type "rpswinet.dll" (without the
	  quotation marks).
	
	4. In the "Look in" box, select My Computer.
	
	5. Click Search.
	
	6. Right-click "rpswinet.dll", and then click Rename.
	
	7. Change the name to rpawinet.old.
	
	8. Press ENTER to save the change.
	
	9. Quit the Search Results program.
	
	MORE INFORMATION
	================
	
	Removing Virtual Key does not fix this issue. You must rename the .dll file to
	prevent the conflict from occurring.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbimu 
	Technology        : kbHomeProdSearch _IKkbbogus kbEncartaSearch kbMMSearch kbEncartaRef2002 kbEncartaEncyc2002 kbEncartaEnCyc2002Del kbEncartaRef2002DVD
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
