---
layout: page
title: "Q89892: Drag and Drop Fails While Playing/Recording in Quick Recorder"
permalink: /kb/089/Q89892/
---

## Q89892: Drag and Drop Fails While Playing/Recording in Quick Recorder

{% raw %}

	Article: Q89892
	Product(s): Miscellaneous Windows Products
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you perform an OLE drag and drop function in File Manager while Quick
	Recorder is playing a sound, an error message displays stating that there is not
	enough memory. This message does not accurately describe the situation.
	
	CAUSE
	=====
	
	The error actually occurs because SNDWAVE.DLL file disables the Cut, Copy, and
	Paste functions (including OLE drag and drop functions) while it is busy.
	
	RESOLUTION
	==========
	
	The only solution is to wait until you have finished playing or recording the
	sound, then perform the OLE drag and drop operation.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys100
	
	=============================================================================
	

{% endraw %}
