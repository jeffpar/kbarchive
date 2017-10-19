---
layout: page
title: "Q70281: Cannot Start Run-Time ToolBook Without a Book"
permalink: /kb/070/Q70281/
---

## Q70281: Cannot Start Run-Time ToolBook Without a Book

	Article: Q70281
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The error
	
	  Cannot Start Runtime ToolBook without a BOOK.
	  You must specify a ToolBook Application
	
	is generated if the TBOOK.EXE file is executed without a *.TBK file specified as
	a parameter and the ToolBook section of the WIN.INI file has been altered so
	that there is no default startup book specified.
	
	WORKAROUND
	==========
	
	Select the ToolBook icon and check the Command Line selection (choose Properties
	from the File menu) on the menu to ensure that a *.TBK file is loaded like one
	of the samples below:
	
	  C:\TOOLBOOK\TBOOK.EXE C:\TOOLBOOK\DAYBOOK.TBK
	
	  -or-
	
	  C:\TOOLBOOK\DAYBOOK.TBK
	  (Assuming *.TBK is associated to TBOOK.EXE in the WIN.INI file)
	
	MORE INFORMATION
	================
	
	ToolBook installs an entry in the WIN.INI file similar to:
	
	     [ToolBook]
	     startupUnits=inches
	     startupHeight=5760
	     startupWidth=8640
	     startupSysColors=true
	     startupSysBooks=
	     startupBook=tourbook.tbk
	
	In the sample above, the "startupBook=tourbook" line causes ToolBook to default
	to the TourBook application when TBOOK.EXE is executed.
	
	If the line reads
	
	  startupBook=
	
	no application is provided when TBOOK.EXE is executed and an error message
	results.
	
	This line may be altered to substitute any ToolBook application for:
	
	  tourbook.tbk
	
	NOTE: The full version of ToolBook, which has the executable file TOOLBOOK.EXE,
	loads without a any *.TBK or startup book specified. The full version of
	ToolBook will load a new authoring screen if it is loaded without a specified
	book or a default startup book.
	
	Additional query words: 3.00 3.0 3.00a windows daybook
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
