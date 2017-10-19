---
layout: page
title: "Q97933: PC WRmt: Extra Dialog and Error Messages"
permalink: /kb/097/Q97933/
---

## Q97933: PC WRmt: Extra Dialog and Error Messages

	Article: Q97933
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While sending mail with version 3.2 of Microsoft Mail Remote for Windows,
	messages such as
	
	  [<time>] Preparing mail for <user>
	
	scroll by on your screen in the Connection dialog, but do not get written to the
	SESSION.LOG file.
	
	CAUSE
	=====
	
	It is by design that these messages do not get written to the SESSION.LOG file.
	
	RESOLUTION
	==========
	
	To show more information both on the screen and in the SESSION.LOG file, add the
	following two parameters to the [SFSREMOTE] section of your
	<WINDOWS>\MSMAIL.INI file:
	
	  Verbose=1
	  DebugLog=1
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
