---
layout: page
title: "Q262315: INFO: ILOVEYOU Virus Attacks FoxPro SCT Files"
permalink: /kb/262/Q262315/
---

## Q262315: INFO: ILOVEYOU Virus Attacks FoxPro SCT Files

{% raw %}

	Article: Q262315
	Product(s): Microsoft FoxPro
	Version(s): 3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet
	Last Modified: 06-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The ILOVEYOU virus and its variants attack files with an .sct extension. The
	virus replaces the .sct files with copies of the virus. SCT is an extension for
	script files as well as for FoxPro forms, which is why the Visual FoxPro files
	are affected. Because the .sct files are replaced, to recover your forms you
	must restore the .scx and .sct files from an uninfected backup.
	
	MORE INFORMATION
	================
	
	If you do not have a backup, but you have built an .app or .exe, ReFox, from
	Xitech, may help you recover the code from your SCTs. For more information about
	ReFox, see the following Web sites:
	
	  http://www.xitech-europe.co.uk/ReFox.html
	
	  -or-
	
	  http://www.hallogram.com
	
	You can also use Microsoft Visual SourceSafe (VSS), which is part of Visual
	Studio, to help you recover your files if you have been using Visual SourceSafe
	and regularly checking your work back into the VSS database.
	
	For more information about the ILOVEYOU virus, please see the following Web
	site:
	
	  http://www.microsoft.com/misc/data/lovelettervirus.htm
	
	REFERENCES
	==========
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: Love Bug Letter virus
	
	======================================================================
	Keywords          : kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : :3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
