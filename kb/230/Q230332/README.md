---
layout: page
title: "Q230332: Cvtres.exe Program Error"
permalink: kb/230/Q230332/
---

## Q230332: Cvtres.exe Program Error

	Article: Q230332
	Product(s): Microsoft Windows NT
	Version(s): 4.0,6.0
	Operating System(s): 
	Keyword(s): kbfile kbLinker kbOSWinNT400 kbVC600 kbDSupport kbGrpDSTools
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A large resource script that contains many custom resources with string names
	may cause the following error message to be displayed during linking:
	
	  CVTRES.EXE Application Error - The instruction at "0x01002b2b" referenced
	  memory at [address]. The memory could not be "written".
	
	CAUSE
	=====
	
	This problem occurs because there is a limited amount of space that is available
	during linking for string names for custom resources. A large resource script
	that contains many custom resources with very long string names may exceed the
	available space and cause the observed linker error.
	
	RESOLUTION
	==========
	
	A supported fix that corrects this problem is now available from Microsoft, but
	it has not been fully regression tested and should be applied only to systems
	experiencing this specific problem. The English version of this fix should have
	the following file attributes or later:
	
	  Date      Time      Size     File name    Platform
	  ---------------------------------------------------
	  05/13/99   05:33p   16,656   Cvtres.exe   x86
	  05/13/99   08:30p   25,872   Cvtres.exe   Alpha
	
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, use numbers to identify resources instead of
	strings.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	The error is the result of the number of characters in a custom resource name.
	The following describes the problem:
	
	If you create a custom resource called "MYTYPE" and add resources under this type
	by using Developer Studio, a number is associated with the resources in the
	Resource.h file.
	
	If you delete these numbers or create the custom MYTYPE resources by hand, the
	resource compiler thinks that you intended to reference these resources by a
	string.
	
	The code to load the resource is different depending on whether the resource is
	identified by using a number or a string.
	
	You use the following line to load a MYTYPE type of resource with the numeric ID
	ID_MYTYPEONE (defined in Resource.h):
	
	  FindResource(hMod, MAKEINTRESOURCE(ID_MYTYPEONE), "MYTYPE");
	
	You use the following line to load a MYTYPE type of resource with the string ID
	"MYTYPEONE" (defined in Resource.h):
	
	  FindResource(hMod, "MYTYPEONE", "MYTYPE");
	
	The problem concerns custom resources that have been identified with strings
	rather than numbers. If these strings are long and numerous, the crash may occur
	if you overrun the space that is available for their names.
	
	Empirical testing has shown that the following formula may be used to determine
	when the problem may occur:
	
	  Total Number of Characters After Which You Crash = 32760 - #Resources
	
	Thus, if you have 5,460 resources, the total number of characters taken up by all
	of those resource names combined should not exceed 27,300.
	
	Additional query words: 4.00 CVTRES
	
	======================================================================
	Keywords          : kbfile kbLinker kbOSWinNT400 kbVC600 kbDSupport kbGrpDSTools 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0,6.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
