---
layout: page
title: "Q148785: New Functions Included in Foxtools.fll"
permalink: /kb/148/Q148785/
---

## Q148785: New Functions Included in Foxtools.fll

{% raw %}

	Article: Q148785
	Product(s): Microsoft FoxPro
	Version(s): 3.00 3.00b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following functions were added to the version of Foxtools.fll that ships
	with Visual FoxPro. This includes versions 3.0 and later as displayed with the
	FoxToolVer() function. The version included with 2.6a was the 1.02 version.
	
	MORE INFORMATION
	================
	
	GETPROSTRG
	----------
	
	This function is used to call the GetProfileString() Windows API. The function
	allows you to read entries in the Win.ini file. The preferred method would be to
	call that function with DECLARE - DLL in Visual FoxPro.
	
	For example:
	
	     x=space(100)
	     len=getprostrg('Desktop','Wallpaper','',@x,100)
	     ?left(x,len)
	
	PUTPROSTRG
	----------
	
	This function calls the WriteProfileString() Windows API function to write data
	into the Win.ini file. The function can also be called directly from
	Kernel32.dll with the DECLARE - DLL function.
	
	For example:
	
	     success=putprostrg('Timo','Test','Mytest')
	
	RGBCOMP
	-------
	
	This function returns the Red, Green, and Blue component values of the
	corresponding composite RGB color value, which is a single number. It is the
	opposite of the RGB() command from the Visual FoxPro language.
	
	For example:
	
	     R=0
	     G=0
	     B=0
	     success=RGBCOMP(16777215,@R,@G,@B)
	     ?R,B,G
	
	The FoxTools.hlp file in the \Vfp\Tools\ directory discusses the commands that
	are exposed in the FLL. These are functions used by FoxPro internally and are
	only exposed as a courtesy; their use is not directly supported. Foxtools is
	accessed like any other FLL with the SET LIBRARY command.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP600
	Version           : 3.00 3.00b
	
	=============================================================================
	

{% endraw %}
