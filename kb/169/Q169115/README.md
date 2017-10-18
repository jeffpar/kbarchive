---
layout: page
title: "Q169115: Importing a Dial-up Networking Phonebook"
permalink: kb/169/Q169115/
---

## Q169115: Importing a Dial-up Networking Phonebook

	Article: Q169115
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It is possible to import your Dial-up Networking Phonebook entries into Windows
	NT 4.0 from another installation of Windows NT 4.0. This article explains how to
	import the phonebook entries.
	
	MORE INFORMATION
	================
	
	To import your Dial-up Networking Phonebook entries, complete the following
	steps.
	
	NOTE: The Phonebook.pbk files from different computers cannot be merged. Also,
	this process cannot be done between computers running Windows NT 3.51 and
	Windows NT 4.0.
	
	Windows NT 4.0
	--------------
	
	NOTE: If you are running Service Pack 4 (SP4) or Service Pack 5 (SP5), substitute
	the file name Rasphone.pbk for Phonebook.bpk in the following steps.
	
	1. Rename the Phonebook.pbk file in the %SystemRoot%\System32\Ras directory on
	  the target computer.
	
	2. Copy the Phonebook.pbk file from the %SystemRoot%\System32\Ras directory of
	  the source installation into the same directory on the target installation.
	
	Windows NT 3.51
	---------------
	
	Importing your phonebook is also possible between two computers running Windows
	NT 3.51. The steps are the same as above, the difference is the file name is
	Rasphone.pbk.
	
	For additional information on undocumented Remote Access Phonebook command line
	options, please see the following article in the Microsoft Knowledge Base:
	
	  Q125393 RASPHONE and RASDIAL: Tips and Differences
	
	Additional query words: connectoid
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
