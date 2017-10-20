---
layout: page
title: "Q81550: PC Win: OLE Object from Excel 3.0 Creates Strange Title"
permalink: /kb/081/Q81550/
---

## Q81550: PC Win: OLE Object from Excel 3.0 Creates Strange Title

{% raw %}

	Article: Q81550
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you insert a Microsoft Excel version 3.0 Object Linking and Embedding (OLE)
	object into version 3.0 of Microsoft Mail for Windows, the Excel title bar for
	the object will contain a string similar to the following:
	
	  Microsoft Mail Message%83329A00%Object17#018
	
	STATUS
	======
	
	This problem has been resolved in Microsoft Excel version 4.0, which displays
	the Title Bar for the object as:
	
	  Microsoft Mail Message
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start Mail.
	
	2. Open a compose form.
	
	3. Move to the body of the message.
	
	4. From the Edit menu, select Insert Object.
	
	5. Choose an Excel object.
	
	Additional query words: 3.00 4.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
