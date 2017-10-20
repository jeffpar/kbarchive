---
layout: page
title: "Q125472: PRB: Unable to Open Files That Have Certain Extensions"
permalink: /kb/125/Q125472/
---

## Q125472: PRB: Unable to Open Files That Have Certain Extensions

{% raw %}

	Article: Q125472
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0,1.0a
	Operating System(s): 
	Keyword(s): kbide kbVC kbprb
	Last Modified: 08-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN PowerStation for MS-DOS, versions 1.0, 1.0a 
	- Microsoft Fortran Powerstation 32 for Windows NT, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Files saved with the following extensions cannot be opened as text files in the
	Visual Workbench:
	
	  .RES
	  .CUR
	  .BMP
	  .EXE
	
	CAUSE
	=====
	
	Visual Workbench is used with other products that reserve these extensions for
	specific purposes. It would normally launch tools to handle these files.
	However, these tools are not available in the FORTRAN PowerStation product.
	
	RESOLUTION
	==========
	
	Save the files using a different extension.
	
	STATUS
	======
	
	Although this original behavior was by design, it was modified in Microsoft
	Fortran PowerStation 32, version 4.0. The 4.0 version of Developer Studio allows
	you to open these files and displays their components and component attributes.
	
	MORE INFORMATION
	================
	
	FORTRAN PowerStation 32 version 1.0 gives the following message when trying to
	open these files as a text file:
	
	  The file is a binary file and cannot be read.
	
	Additional query words: 1.00 1.00a
	
	======================================================================
	Keywords          : kbide kbVC kbprb 
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword2 kbZNotKeyword3 kbFORTRANPower32100NT kbFORTRANPower100DOS kbFORTRANPower100aDOS
	Version           : :1.0,1.0a
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
