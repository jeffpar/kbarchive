---
layout: page
title: "Q151759: DOCERR: Find/Load FoxTools API Library Wrong in FoxTools.hlp"
permalink: /kb/151/Q151759/
---

## Q151759: DOCERR: Find/Load FoxTools API Library Wrong in FoxTools.hlp

{% raw %}

	Article: Q151759
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The FoxTools Help incorrectly describes where to find the FoxTools API library
	and how to load it so the functions in it can be called in Visual FoxPro.
	
	MORE INFORMATION
	================
	
	The FoxTools.hlp file is located in the Microsoft Visual FoxPro:Tools folder. It
	documents the functions found in the FoxTools.cfm and FoxTools.slm libraries.
	
	When the FoxTools.hlp file is first opened, there is a heading titled "Where
	FOXTOOLS gets installed". Under that is another heading titled "Visual FoxPro
	for Macintosh". The information contained under this latter heading is
	incorrect.
	
	FoxTools.mlb was the name of the FoxTools file in FoxPro for Macintosh 2.6, and
	was installed in the "System:Extensions" folder. In Visual FoxPro, there are two
	FoxTools files, both of which are installed in the Visual FoxPro folder. The
	FoxTools.cfm file is for use on PowerPCs only. FoxTools.slm is for use on the
	PowerPC and 68K Macintosh. FoxTools.slm needs the Apple Shared Library Manager
	installed to load.
	
	To call the functions in the FoxTools library, the SET LIBRARY TO command has to
	be used to load the FoxTools library. In Visual FoxPro, the full FoxTools file
	name must be specified. Also include the path to the FoxTools library when
	loading it. The HOME() function can normally be used to simplify this.
	
	The following command loads the FoxTools library:
	
	     SET LIBRARY TO HOME()+"FoxTools.cfm"
	     SET LIBRARY TO HOME()+"FoxTools.slm"
	
	The message "API library is not found" will be returned if the .cfm or .slm is
	not included in the file name, or if the path is not specified and Visual FoxPro
	cannot locate the FoxTools file specified.
	
	Additional query words: VFoxMac
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac
	Version           : MACINTOSH:3.0b
	
	=============================================================================
	

{% endraw %}
