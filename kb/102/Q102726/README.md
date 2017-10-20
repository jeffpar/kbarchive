---
layout: page
title: "Q102726: Overview of MacPrint Services for Windows NT Server"
permalink: /kb/102/Q102726/
---

## Q102726: Overview of MacPrint Services for Windows NT Server

{% raw %}

	Article: Q102726
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	This article describes all features and characteristics of the Print
	Server for Macintosh (also called MacPrint) and Macintosh printing.
	
	All PostScript printers supported by Windows NT are also supported by
	MacPrint.
	
	MacPrint prints jobs from Macintosh clients with LaserWriter Chooser
	version 5.2 or later. Because of compatibility problems with
	PostScript dictionaries that use the EXITSERVER command, some printers
	do not support jobs from Macintoshes using Chooser versions 5.2 or
	6.0. The official client requirements for Services for Macintosh on
	the client side are Apple System Software version 6.08 or later, which
	installs supported versions of the LaserWriter driver.
	
	Jobs from LaserWriter Chooser versions earlier than 7.0 are played
	through the PostScript to GDI converter regardless of the driver
	specified for the Windows NT printer. If the Windows NT printer driver
	is PostScript, and the job is from a version 7.0 or later LaserWriter
	Chooser, then the PostScript will be played to the printer in RAW
	mode.
	
	MacPrint does not cache PostScript dictionaries as it was done in
	Chooser version 1.0. This was a complex process that did not work with
	all client types and did not provide clear performance enhancements.
	
	What Happened to the PPD Files?
	-------------------------------
	
	Unlike version 1.0, this version of MacPrint does not require PPD
	files describing the various PostScript printers used by the server.
	Instead, Windows NT version 3.1 provides a mechanism to query for the
	same information provided by PPD files.
	
	Why Doesn't it Display Job Information?
	---------------------------------------
	
	The Windows NT Print Manager displays numerous pieces of information
	about print jobs, including the name of the document, document owner,
	and the number of pages. Adobe's Document Structuring Conventions
	allow the Macintosh client to include this information in the print
	job. If the information is included in the print job, MacPrint gives
	it to the Windows NT 3.1 Print Manager; otherwise, the Document Name
	defaults to "Macintosh Document," the owner defaults to "MacPrint,"
	and the number of pages is not specified.
	
	About Printer Messages
	----------------------
	
	The Windows NT Print Manager provides clients who submit print jobs
	messages about print job status (for example, Print Job Complete).
	These messages are NOT provided for Macintosh clients in this release.
	
	What About Security?
	--------------------
	
	The MacPrint service runs under the security context of the MacPrint
	user account. It is therefore possible to protect a Windows NT 3.1
	Printer from Macintosh clients as a group by restricting access to the
	MacPrint user account. See your "Administrator's Guide" for complete
	information on setting up the MacPrint user account.
	
	Additional query words: sfm prodnt MacPrint
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNT310Search
	Version           : 3.1 3.5 3.51 4.0
	
	=============================================================================
	

{% endraw %}
