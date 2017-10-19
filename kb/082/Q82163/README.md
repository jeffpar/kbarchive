---
layout: page
title: "Q82163: Differences Between the Mini- and Full-OLE Servers"
permalink: /kb/082/Q82163/
---

## Q82163: Differences Between the Mini- and Full-OLE Servers

	Article: Q82163
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): kbole kbtool kbdta
	Last Modified: 28-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the differences and similarities between mini and full
	OLE servers.
	
	MORE INFORMATION
	================
	
	An OLE server, also referred to as source application, is responsible for
	providing and manipulating the data component. Servers can either be mini
	servers or full servers. Both mini and full servers support embedded components;
	however, only full servers support both embedding and linking.
	
	Mini servers appear more like a dialog box, and in some cases there is no
	distinction. Usually, they are applications that can only be launched from a
	host application, and will display an error message if started from File Manager
	or Program Manager. Mini servers only support embedded components (and not
	linked components) because they don't have the ability to save files to disk.
	Examples of mini servers are Microsoft WordArt, Microsoft Note-It, and Microsoft
	Draw.
	
	Full servers are stand-alone applications with a full complement of menus and
	functions. Although they support OLE functions, they don't need a host
	application to run. Full servers may be either single document interface (SDI)
	applications that only allow one document to be opened at a time, such as
	Paintbrush, or multiple document interface applications (MDI) that allow editing
	of multiple documents at a time, such as Microsoft Excel and Microsoft Word for
	Windows.
	
	Additional query words: 3.10 3.11 mini ole full server host source
	
	======================================================================
	Keywords          : kbole kbtool kbdta 
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	Hardware          : x86
	Issue type        : kbinfo
	
	=============================================================================
	
