---
layout: page
title: "Q121441: Code Sample to Find Application Path Using File Extension"
permalink: /kb/121/Q121441/
---

## Q121441: Code Sample to Find Application Path Using File Extension

{% raw %}

	Article: Q121441
	Product(s): Microsoft FoxPro
	Version(s): 2.5x 2.60 2.60a 3.00
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 21-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5x, 2.6, 2.6a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you know the file extension of a file type that an application uses, you can
	quickly determine the full path of that application by reading the [EXTENSIONS]
	section of the WIN.INI file (the Windows 3.x initialization file). To do this
	programmatically from FoxPro, you can use the FOXTOOLS.FLL library to make a
	call to the Windows API GetPrivateProfileString() function, as the code example
	below demonstrates.
	
	NOTE: For backward compatibility, Visual FoxPro still supports FOXTOOLS.FLL
	(included in earlier FoxPro versions), the Visual FoxPro API library that allows
	calls to 16-bit .DLL functions. However, in Visual FoxPro, the DECLARE command
	is the preferred method for calling .DLL functions.
	
	MORE INFORMATION
	================
	
	NOTE: This example only works with Windows version 3.x (16-bit versions), which
	use the WIN.INI file. Windows NT and Windows 95 use the Registry instead of
	WIN.INI.
	
	When you run this code, you will be prompted to enter the extension. For example,
	enter a file extension such as "XLS" (without the quotation marks) and press
	ENTER. If Microsoft Excel is installed, the full path to Microsoft Excel will be
	returned.
	
	     SET LIBRARY TO SYS(2004)+"foxtools"
	     @ 1,1 GET ext DEFAULT "     " SAY "Enter the extension: "
	     READ
	     ext=ALLTRIM(ext)
	     IF LEN(ext)=0
	        RETURN
	     ENDIF
	     mpath=REPLICATE(CHR(0),256)
	
	     * Register and call the Windows API function.
	
	     mregister=regfn("GetPrivateProfileString","CCC@CIC","I")
	     mcall=callfn(mregister,"Extensions",ext,"",@mpath,256,"WIN.INI")
	
	     mpath=ALLTRIM(mpath)
	     CNT=OCCURS('\',mpath)  && find the last backslash in the path
	     IF CNT=0
	        ? CHR(7)
	        WAIT WINDOW "File Extension Not Found"  && in the WIN.INI file
	        RETURN
	     ENDIF
	     x=AT('\',mpath,CNT)  && find the position of the last backslash
	     mpath=SUBSTR(mpath,1,x-1)  && extract just the path
	     @ 2,1 SAY "The path to the executable is " + mpath
	
	Additional query words: VFoxWin FoxWin 2.50 2.50a 2.50b 2.50c
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260 kbFoxPro260a kbVFP300
	Version           : 2.5x 2.60 2.60a 3.00
	
	=============================================================================
	

{% endraw %}
