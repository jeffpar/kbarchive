---
layout: page
title: "Q110000: BUG: Format Editor Displays G Descriptor Using E Format"
permalink: kb/110/Q110000/
---

## Q110000: BUG: Format Editor Displays G Descriptor Using E Format

	Article: Q110000
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0,4.0
	Operating System(s): 
	Keyword(s): kbide kbVCkbbuglist
	Last Modified: 09-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran Powerstation 32 for Windows NT, versions 1.0, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the Visual Workbench Format Editor, the G edit descriptor always displays
	sample output using the E edit descriptor format.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The G edit descriptor corresponds to either E or F editing depending on the
	magnitude of the data. The Format Editor, however, always displays sample output
	for the G edit descriptor in the E edit descriptor format. The actual program
	output appears in the correct format.
	
	Additional query words: 1.00 4.00
	
	======================================================================
	Keywords          : kbide kbVC kbbuglist
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword2 kbFORTRANPower32100NT kbFORTRANPower32400NT
	Version           : :1.0,4.0
	Issue type        : kbbug
	
	=============================================================================
	
