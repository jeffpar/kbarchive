---
layout: page
title: "Q199006: BUG: Issuing PACK &lt;table name&gt; Causes Fatal Error"
permalink: kb/199/Q199006/
---

## Q199006: BUG: Issuing PACK &lt;table name&gt; Causes Fatal Error

	Article: Q199006
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbvfp600bug KbDBFDBC
	Last Modified: 20-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Issuing PACK <table name> causes the following error:
	
	  Fatal error: Exception code = C0000005.
	
	This error only occurs in Visual FoxPro 6.0. The ability to add the table name
	clause was added in Visual FoxPro 5.0
	
	RESOLUTION
	==========
	
	Do not use the <table name> clause with the PACK command. Open the table,
	and then issue the PACK command without any clauses.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	The PACK command has an undocumented feature of adding the table name to the end
	of the command. This feature is useful if the table is closed at the time the
	PACK <table name> command is issued. If the table is in use, the "File is
	in use" error occurs.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In the Visual FoxPro 6.0 Command window, type the following command:
	
	     PACK HOME(2)+"\data\customer"
	
	Note that the fatal error occurs and FoxPro quits.
	
	
	Additional query words: kbDSupport kbDSE
	
	======================================================================
	Keywords          : kbvfp600bug KbDBFDBC 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
