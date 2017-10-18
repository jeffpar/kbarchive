---
layout: page
title: "Q258514: Unable to Manage IIS 4.0 with the System Locale Set to French"
permalink: kb/258/Q258514/
---

## Q258514: Unable to Manage IIS 4.0 with the System Locale Set to French

	Article: Q258514
	Product(s): Internet Information Server
	Version(s): winnt:4.0,5.0; :
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Advanced Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You cannot use the Windows 2000 IIS snap-in to manage Internet Information
	Server 4.0 computers that have the system locale is set to French.
	
	CAUSE
	=====
	
	Because the encryption laws in France have been modified, Windows 2000 computers
	with the system locale set to French have the same behavior as Windows 2000
	computers using a non-French locale, as follows:
	
	- Portions of the Internet Information Services 5.0 metabase are encrypted.
	
	- IIS remote administration uses an encrypted-session protocol (analog to SSL)
	  to avoid transmission of plain text data over the wire.
	
	The current design does not allow you to do the following:
	
	- To negotiate the encryption level between the IIS Admin client and the
	  Internet Information Server 4.0 computer.
	
	- To specify the encryption level for a specific management session.
	
	This behavior is by design.
	
	WORKAROUND
	==========
	
	- Use the HTML Internet Admin tool (HTMLA) to manage the Internet Information
	  Server 4.0 computer.
	
	- Use a Windows NT 4.0 computer to administer the Web Server using the IIS
	  snap-in.
	
	MORE INFORMATION
	================
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q243087 IIS Does Not Start If French (Canadian) Is Set as System Locale
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbiisSearch kbiis500 kbiis400 kbWinAdvServSearch
	Version           : winnt:4.0,5.0; :
	Issue type        : kbprb
	
	=============================================================================
	
