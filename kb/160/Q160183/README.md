---
layout: page
title: "Q160183: XADM: Processing File Server.ins, at or near Line 437"
permalink: /kb/160/Q160183/
---

## Q160183: XADM: Processing File Server.ins, at or near Line 437

{% raw %}

	Article: Q160183
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 11-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are installing a Microsoft Exchange Server 4.0 computer into an
	Exchange Server Site in which Exchange Server 5.0 has been installed, you
	receive the following error messages during the final part of the installation:
	
	  Processing file Server.ins, at or near line 437
	  The file appears to be corrupted.
	  Microsoft Exchange Server Setup
	  ID no: c103264a
	
	  The file appears to be corrupted.
	  Microsoft Exchange Server Setup
	  ID no: c103264a
	
	CAUSE
	=====
	
	Your Microsoft Exchange Server setup point was created incorrectly. You must
	create the setup point by following the directions in the RESOLUTION section
	below.
	
	RESOLUTION
	==========
	
	To create a correct setup point:
	
	1. Place the Microsoft Exchange Server 4.0 compact disc in your CD-ROM drive.
	
	2. Copy the contents, including all subdirectories, in the
	  Setup\<platform> directory on the version 4.0 compact disc to a
	  directory named 40Setup.
	
	3. Place the Microsoft Exchange Server 5.0 compact disc in your CD-ROM drive.
	
	4. Copy the contents of the Support\Exch40\<platform> directory to the
	  40Setup directory.
	
	5. Click Yes to overwrite the files.
	
	6. Run Setup.exe in the 40Setup directory to add a new server to the site.
	
	MORE INFORMATION
	================
	
	The above information is also available in Section 1.3 of the Microsoft Exchange
	Server Version 5.0 Release Notes (Readme.wri), which describes the proper way to
	install a Microsoft Exchange Server 4.0 in a Microsoft Exchange Server Site
	after Microsoft Exchange Server 5.0 has been installed.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	
	=============================================================================
	

{% endraw %}
