---
layout: page
title: "Q113717: Err Msg: Mviewer2 Caused a GP Fault in CNMNIA94.DLL"
permalink: /kb/113/Q113717/
---

## Q113717: Err Msg: Mviewer2 Caused a GP Fault in CNMNIA94.DLL

{% raw %}

	Article: Q113717
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1994 editions
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 09-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Cinemania 1994 editions 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you type the letter "n" (without the quotes) in the Topic Search box in the
	Movie Still section of the Gallery, the following error message is generated:
	
	  MVIEWER2 caused a General Protection Fault in module CNMNIA94.DLL
	
	The above error message may also occur when you enter Gallery or try to change
	any of the filters in the Movie Contents. (See the "More Information" section in
	this article for additional information.)
	
	MORE INFORMATION
	================
	
	When you enter the Gallery or try to change filters in the Movie Contents, the
	above error message may occur if the incorrect version of the CTL3D.DLL is on
	the system.
	
	Verify that the following file is in the WINDOWS\SYSTEM subdirectory:
	
	  CTL3D.DLL   14416   3/23/93
	
	If a different CTL3D.DLL is listed in the WINDOWS\SYSTEM subdirectory, rename the
	current file and copy the CTL3D.DLL from the VIEWER directory on the Cinemania
	1994 CD-ROM.
	
	WORKAROUND
	==========
	
	To search for movie stills starting with the letter n:
	
	1. From the toolbar, choose Gallery.
	
	2. From the Remote interface, select All Media.
	
	3. Type "n" (without the quotation marks) to search for titles beginning with
	  the letter n.
	
	4. From the Remote interface, select Movie Stills.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Cinemania 1994. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: kbhowto 1994 multi media multimedia multi-media gpf
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbHomeProdSearch kbHomeMMsearch kbCineManiaSearch kbCinemania1994
	Version           : :1994 editions
	
	=============================================================================
	

{% endraw %}
