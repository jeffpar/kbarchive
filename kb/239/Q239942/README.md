---
layout: page
title: "Q239942: Access Violation in Snaexp.exe Occurs When Inserting a Range of"
permalink: /kb/239/Q239942/
---

## Q239942: Access Violation in Snaexp.exe Occurs When Inserting a Range of

{% raw %}

	Article: Q239942
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0,4.0 SP1,4.0 SP2
	Operating System(s): 
	Keyword(s): sna4 kbsna400sp1 kbsna400sp2kbbuglist
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a range of LUs is inserted into a connection while an existing LU in the
	connection is highlighted, an Access Violation error may occur and a Dr. Watson
	Log similar to the following may be generated:
	
	  Application exception occurred:
	  App: exe\snaexp.dbg (pid=408)
	  When: 8/5/1999 @ 14:29:20.843
	  Exception number: c0000005 (access violation)
	
	CAUSE
	=====
	
	The Access Violation error is caused by the Range Of LUs Wizard using an
	uninitialized pointer.
	
	WORKAROUND
	==========
	
	When you use the Range of LUs Wizard to insert a range of LUs in a connection,
	make sure an existing LU in the connection is not highlighted.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 4.0, SNA Server 4.0
	Service Pack 1, SNA Server 4.0 Service Pack 2.
	
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : sna4 kbsna400sp1 kbsna400sp2 kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2
	Version           : WINDOWS:4.0,4.0 SP1,4.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
