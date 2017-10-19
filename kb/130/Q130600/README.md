---
layout: page
title: "Q130600: PRB: dBASE Functions Give &quot;File &lt;name&gt; Does not exist&quot; Error"
permalink: /kb/130/Q130600/
---

## Q130600: PRB: dBASE Functions Give &quot;File &lt;name&gt; Does not exist&quot; Error

	Article: Q130600
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Issuing the following valid dBASE IV functions in Visual FoxPro causes the error
	"File <name> does not exist" instead of the error message "Function not
	implemented":
	
	     CALL()
	     CATALOG()
	     CERROR()
	     DGEN()
	     ISMARKED()
	     LKSYS()
	     RUN()
	
	NOTE: dBASE IV is manufactured by a vendor independent of Microsoft; we make no
	warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	CAUSE
	=====
	
	These functions are not valid Visual FoxPro functions.
	
	WORKAROUND
	==========
	
	There are no equivalent Visual FoxPro commands for CATALOG(), CERROR(),
	ISMARKED(), LKSYS(), and DGEN().
	
	Use the Visual FoxPro RUN command in place of the dBASE RUN() function and the
	Visual FoxPro CALL command in place of the dBASE CALL() function.
	
	STATUS
	======
	
	This behavior is by design.
	
	Steps to Reproduce Behavior
	---------------------------
	
	Issue any of the functions listed above in the Command window. For example:
	
	     ? ISMARKED()
	
	If this was a supported function, FoxPro would give a different error.
	
	NOTE: ? CATALOG() will open the Catalog Manager in FoxPro version 2.6. Visual
	FoxPro does not support the Catalog Manager.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
