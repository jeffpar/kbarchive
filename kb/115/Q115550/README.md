---
layout: page
title: "Q115550: FAX: FAXVIEW.EXE Error &quot;File Cannot Be Saved&quot;"
permalink: /kb/115/Q115550/
---

## Q115550: FAX: FAXVIEW.EXE Error &quot;File Cannot Be Saved&quot;

{% raw %}

	Article: Q115550
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0,3.0a,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to Fax, versions 3.0, 3.0a, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When trying to view a fax image, FAXVIEW.EXE generates this error:
	
	  File cannot be saved. It may be read-only or locked.
	
	CAUSE
	=====
	
	FAXVIEW.EXE is having difficulties due to insufficient disk space or file
	handles.
	
	RESOLUTION
	==========
	
	Check the server disk space and remove files from the server if necessary.
	Increase the number of file handles to 50 (FILES=50) in the workstation
	CONFIG.SYS file.
	
	
	Additional query words: 3.0 3.00a 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateFax300 kbMailGateFax300a kbMailGateFax320
	Version           : MS-DOS:3.0,3.0a,3.2
	
	=============================================================================
	

{% endraw %}
