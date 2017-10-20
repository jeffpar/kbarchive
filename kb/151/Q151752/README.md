---
layout: page
title: "Q151752: ADIR() Works Differently in 3.0 than in 2.6"
permalink: /kb/151/Q151752/
---

## Q151752: ADIR() Works Differently in 3.0 than in 2.6

{% raw %}

	Article: Q151752
	Product(s): Microsoft FoxPro
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, Professional Edition, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The ADIR() function in Visual FoxPro for Macintosh version 3.0 has been changed
	to work more as it does in Visual FoxPro for Windows when no file skeleton is
	included as the second argument. In FoxPro for Macintosh version 2.6a, if no
	file skeleton was used and a folder was specified in the second argument, ADIR()
	would return the number of files in that folder. In FoxPro for Windows version
	2.6x and in Visual FoxPro (Windows and Macintosh), a zero is returned.
	
	MORE INFORMATION
	================
	
	The following commands typed in the FoxPro Command window will illustrate the
	change in behavior. For these commands, it is assumed that the Visual FoxPro
	samples folders are installed. If using these commands in FoxPro 2.6, substitute
	the hard drive name or drive letter and folder or directory path to where Visual
	FoxPro is installed for the HOME() function. For instance "Macintosh
	HD:Microsoft Visual FoxPro:" on the Macintosh or "C:\VFP\" in Windows.
	
	      DIMENSION farray(1,1)
	      SET DEFAULT TO HOME()+"Samples"
	      ? ADIR("farray",":Data:")       && If using VFP/Mac
	      ? ADIR("farray","Data\")        && If using VFP/Win
	
	In Visual FoxPro and FoxPro for Windows 2.6, the ADIR() functions above will
	return a zero. In FoxPro for Macintosh 2.6, they will return a 14, which is the
	number of files in the Samples:Data folder.
	
	To have ADIR() return the number of files in the Samples:Data folder in Visual
	FoxPro, use the following syntax for ADIR():
	
	      ? ADIR("farray",":Data:*.*")    && If using VFP/Mac
	      ? ADIR("farray","Data\*.*")     && If using VFP/Win
	
	Additional query words: 3.00 VFoxMac
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300Mac
	Version           : :3.0
	
	=============================================================================
	

{% endraw %}
