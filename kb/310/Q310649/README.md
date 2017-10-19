---
layout: page
title: "Q310649: ISAPI DLLs Built w/ MFC Static Library Vulnerable to DoS Attacks"
permalink: /kb/310/Q310649/
---

## Q310649: ISAPI DLLs Built w/ MFC Static Library Vulnerable to DoS Attacks

	Article: Q310649
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An Internet Server Application Programming Interface (ISAPI) server extension
	that is built by using Microsoft Foundation Classes (MFC) in a static library
	can be vulnerable to Denial of Service (DoS) attacks.
	
	CAUSE
	=====
	
	When MFC processes data from the POST method, MFC allocates enough buffer space
	to hold the data and then decodes the data into an argument list for the default
	method of the ISAPI server extension. Under heavy load, the MFC ISAPI code
	produces arguments that are not valid. When the user code tries to process the
	information, an access violation occurs.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Only apply it to systems
	that are experiencing this specific problem. This fix may receive additional
	testing. Therefore, if you are not severely affected by this problem, Microsoft
	recommends that you wait for the next Microsoft Visual Studio 6.0 service pack
	that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, visit the following Microsoft
	Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The usual support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The English version of this fix has the file attributes (or later) that are
	listed in the following table. The dates and times for these files are listed in
	coordinated universal time (UTC). When you view the file information, it is
	converted to local time. To find the difference between UTC and local time, use
	the Time Zone tab in the Date and Time tool in Control Panel.
	
	  Date         Time   Size     File name    
	  -----------------------------------------
	  19-Sep-2001  16:02  138,948  Eafxis.lib
	  19-Sep-2001  16:02  749,568  Eafxis.pdb
	  19-Sep-2001  16:01  102,514  Nafxis.lib
	  19-Sep-2001  16:01   86,016  Nafxis.pdb
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	This vulnerability is only in the Visual C++ MFC static libraries and is not
	exposed in the MFC dynamic-link libraries (DLLs).
	
	To use this fix, you need a recompile of the affected ISAPI extension with the
	new files provided in this fix. Copy the updated files in this fix over the
	existing files. By default, the existing files that have to be updated appear in
	the following directory:
	
	  %Program Files%\Microsoft Visual Studio\VC98\MFC\Lib\
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
