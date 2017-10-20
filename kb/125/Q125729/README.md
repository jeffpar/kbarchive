---
layout: page
title: "Q125729: PRB: Pre-Built STDREG.EXE Works Incorrectly"
permalink: /kb/125/Q125729/
---

## Q125729: PRB: Pre-Built STDREG.EXE Works Incorrectly

{% raw %}

	Article: Q125729
	Product(s): Microsoft C Compiler
	Version(s): 2.0,2.1,2.2,4.0,4.1
	Operating System(s): 
	Keyword(s): kbusage kbnokeyword kbDatabase kbMFC kbVC200 kbVC400 kbVC410 kbSamplePro kbGrpDSODBC kb
	Last Modified: 29-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2, 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the pre-built STDREG.EXE sample from the Visual C++ CD-ROM, and
	click "Initialize Data" within the "Student Registration Setup" dialog box, a
	"SQL Server Login" dialog box appears that prompts for a Login ID and Password.
	When you click OK after entering the necessary information, you will notice that
	the application returns to the first dialog box without getting to the "Enter
	Sql Column Syntax" dialog.
	
	CAUSE
	=====
	
	This behavior is by design. The cursor library attempts to create its temporary
	files in the current directory. The operation fails as the current volume is
	read-only.
	
	RESOLUTION
	==========
	
	To work around the problem, copy the sample from the CD-ROM to a writable
	volume. If you build the STDREG.EXE sample as debug or release, rather than run
	it from the CD, it works as described in the documentation.
	
	MORE INFORMATION
	================
	
	For Visual C++ version 2.0, STDREG.EXE can be found in the
	\MSVC20\SAMPLES\MFC\BIN directory on the distribution CD. For Visual C++ version
	4.0, STDREG.EXE can be found on the distribution CD in the
	\MSDEV\SAMPLES\MFC\DATABASE\STDREG directory.
	
	Additional query words: 3.00 3.10 3.20
	
	======================================================================
	Keywords          : kbusage kbnokeyword kbDatabase kbMFC kbVC200 kbVC400 kbVC410 kbSamplePro kbGrpDSODBC kbNoUpdate 
	Technology        : kbAudDeveloper _IKkbbogus kbMFC
	Version           : :2.0,2.1,2.2,4.0,4.1
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
