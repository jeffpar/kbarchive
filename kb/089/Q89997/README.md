---
layout: page
title: "Q89997: Changes to Wrong File when Switching Tasks in Quick Recorder"
permalink: /kb/089/Q89997/
---

## Q89997: Changes to Wrong File when Switching Tasks in Quick Recorder

{% raw %}

	Article: Q89997
	Product(s): Miscellaneous Windows Products
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you are using the Quick Recorder Compression dialog box, and you switch to
	the OLE application, play the sound object, and switch back to Quick Recorder,
	Quick Recorder saves any compression changes in the OLE sound object instead of
	the file open in Quick Recorder.
	
	This problem only occurs when you are in the Quick Recorder Compression dialog
	box and you switch to, and back from, an OLE client application.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Run Quick Recorder.
	
	2. Open a .WAV file.
	
	3. From the Options menu, choose Compression.
	
	4. Open an OLE client that has an embedded sound object.
	
	5. Open the sound object in the OLE client.
	
	6. Switch the focus back to Quick Recorder (the compression dialog box should
	  still be active).
	
	7. Change the compression.
	
	8. Choose the OK button.
	
	9. Close Quick Recorder.
	
	Quick Recorder indicates that the embedded sound object has changed and asks if
	you want to save the changes. This is incorrect because you attempted to change
	the compression for the file loaded in Quick Recorder, but the changes were made
	to the embedded sound object.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows Sound System Quick
	Recorder version 1.0. We are researching this problem and will post new
	information here as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys100
	
	=============================================================================
	

{% endraw %}
