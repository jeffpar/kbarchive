---
layout: page
title: "Q264968: Files without Extensions are Mapped to Application/Octet-Stream"
permalink: /kb/264/Q264968/
---

## Q264968: Files without Extensions are Mapped to Application/Octet-Stream

	Article: Q264968
	Product(s): Internet Information Server
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When IIS locates a file that does not have an extension, the Content-Type that
	is sent back to the browser is set to application/octet-stream. There is no way
	to change this behavior in the user interface. The AOL Netscape browser does not
	display the file because of this header setting. Instead, it tries to download
	the file.
	
	RESOLUTION
	==========
	
	WARNING: Editing the metabase incorrectly can cause serious problems that may
	require you to reinstall any product that uses the metabase. Microsoft cannot
	guarantee that problems resulting from incorrectly editing the metabase can be
	solved. Edit the metabase at your own risk.
	
	NOTE: You should always back up the metabase before you edit it.
	
	To resolve this problem, do the following:
	
	1. Install the IIS Resource Kit.
	
	2. Run the Setup program to install MetaEdit.
	
	3. Start MetaEdit, open the LM tree in the left hand pane, and then open the
	  MimeMap folder.
	
	4. In the right pane, double-click ID 6015 MimeMap.
	
	5. In the Data list box, scroll down (about half way) until you find
	  .*,application/octet-stream.
	
	6. Change the value to .*,text/html.
	
	7. Click OK, and then close MetaEdit.
	
	8. Open a command window so that you can stop and restart IIS.
	
	9. Type the following command at a command prompt:
	
	  net stop iisadmin /y
	
	10. Type the following command at a command prompt:
	
	  net start w3svc
	
	WORKAROUND
	==========
	
	Add an extension to the file.
	
	STATUS
	======
	
	This is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : winnt:4.0,5.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
