---
layout: page
title: "Q136278: BUG: Error When Using @ SAY to Play Sounds from General Field"
permalink: /kb/136/Q136278/
---

## Q136278: BUG: Error When Using @ SAY to Play Sounds from General Field

{% raw %}

	Article: Q136278
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp300bBUG kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the @ SAY command to play a sound that is stored in a general field
	in Visual FoxPro under Windows 95, one of the following errors occur:
	
	  "OLE error code 0x800101105: The server threw an exception"
	
	  -or-
	
	  "OLE error code 0x80080006: OLE service could not communicate with the object
	  server"
	
	If the general field is opened and the sound object is double-clicked, the sound
	will play.
	
	WORKAROUND
	==========
	
	To play the sound, open the general field, and click it. The sound cannot be
	played with the @ SAY command.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	To store sounds in a general field, open the general field, and then click Insert
	Object on the Edit menu. The following steps add a sound to a Visual FoxPro
	table, and produce the error.
	
	1. Create or open a table that has a general field.
	
	2. Browse the table and open the general field by clicking it or by selecting it
	  and pressing CTRL+PGDN.
	
	3. On the Edit menu, click Insert Object. Select Wave Sound from the Object Type
	  box.
	
	4. On the Sound Object box Edit menu, click Insert File, and select a wave file
	  to add to the general field.
	
	5. Close the Sound Object box. Save and close the general field.
	
	6. In the Command window, type this command:
	
	     @ 0,0 SAY <general field name> VERB 'PLAY'
	
	  The sound stored in the general field will start to play, but then the error
	  will occur. If you open the general field and click the sound, it will play
	  correctly.
	
	Additional query words: kbvfp300 kbvfp500 kbvfp600
	
	======================================================================
	Keywords          : kbvfp300bBUG kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
