---
layout: page
title: "Q153122: TrueImage Errors When Printing from a Macintosh"
permalink: /kb/153/Q153122/
---

## Q153122: TrueImage Errors When Printing from a Macintosh

	Article: Q153122
	Product(s): Microsoft Windows NT
	Version(s): 3.10 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print from a Macintosh to a non-PostScript print queue on a Windows NT
	Server, you may receive the following error message:
	
	  ID 4014
	  source- macprint
	  type- error
	  Category- TrueImage print
	  The TrueImage interpreter was unable to query the font list correctly to begin
	  processing job.
	
	CAUSE
	=====
	
	The PostScript interpreter in Windows NT 3.51 expects the PostScript format of
	the Macintosh to follow the LaserWriter Plus standard. This is usually not a
	problem because that is the printer (ppd) that defaults under Macintosh
	Services. However, if you have changed that default, you will get the ID 4014
	error as described above.
	
	RESOLUTION
	==========
	
	Change the driver back to the default, that is, LaserWriter Plus. This should
	not adversely affect the print quality.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.x. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNT310Search
	Version           : 3.10 3.50 3.51
	
	=============================================================================
	
