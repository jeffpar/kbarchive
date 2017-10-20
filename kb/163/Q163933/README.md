---
layout: page
title: "Q163933: FIX: Executable Error &quot;&lt;path&gt; is not an object file&quot;"
permalink: /kb/163/Q163933/
---

## Q163933: FIX: Executable Error &quot;&lt;path&gt; is not an object file&quot;

{% raw %}

	Article: Q163933
	Product(s): Microsoft FoxPro
	Version(s): 5.0a 5.0
	Operating System(s): 
	Keyword(s): kbtool kbvfp kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 23-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you run an executable installed from disk images created by the Visual FoxPro
	Setup Wizard, the following error message appears:
	
	  "<Path and file name to executable> is not an object file."
	
	Note that the size of the executable installed on the destination machine is
	larger than the original.
	
	RESOLUTION
	==========
	
	There are two possible workarounds to this situation:
	
	1. Distribute an additional file that is named alphabetically first. For
	  example, if there is only one file being distributed and it is named
	  "myexe.exe," add an additional file named "a.txt."
	
	2. If possible, use the NetSetup images instead of diskette images created by
	  the Setup Wizard.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This has been corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	The three criteria that cause this error are:
	
	- The .EXE to distribute must be large enough to have the Setup Wizard split it
	  into separate files for distribution.
	
	- The split files must spread across more than one diskette image.
	
	- The .EXE file name must be the first file, alphabetically, of the files being
	  distributed via the Setup Wizard.
	
	Additional query words: grow grew increased bigger kbvfp600fix
	
	======================================================================
	Keywords          : kbtool kbvfp kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : 5.0a 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
