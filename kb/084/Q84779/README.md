---
layout: page
title: "Q84779: DOC: Don't Call Destroy Function on Loaded Cursor or Icon"
permalink: /kb/084/Q84779/
---

## Q84779: DOC: Don't Call Destroy Function on Loaded Cursor or Icon

	Article: Q84779
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbdocfix kb16bitonly kbCursor kbIcon kbResource kbSDKPlatform
	Last Modified: 11-JUN-1999
	
	3.10
	WINDOWS
	kbprg kbdocerr
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The "Microsoft Windows Software Development Kit: Programmer's Reference, Volume
	2: Functions" manual contains an error regarding the proper use of the
	DestroyCursor and DestroyIcon functions. This error is repeated a number of
	times throughout the manual. This article lists the various changes required to
	correct the error.
	
	The manual states that when an application loads a cursor using the LoadCursor
	function, it should delete the cursor using the DestroyCursor function.
	Likewise, the manual states that when an application loads an icon using the
	LoadIcon function, it should delete the icon using the DestroyIcon function.
	These two statements are incorrect. DestroyCursor is used only on cursors
	created with the CreateCursor function and DestroyIcon is used only on icons
	created with the CreateIcon function.
	
	To address this problem, make the following four changes to the "Microsoft
	Windows SDK: Programmer's Reference, Volume 2: Functions" manual:
	
	- On page 216, modify the documentation for the DestroyCursor function to
	  remove the reference to LoadCursor.
	
	- On page 216, modify the documentation for the DestroyIcon function to remove
	  the reference to LoadIcon.
	
	- On page 576, modify the documentation for the LoadCursor function to replace
	  the following line An application should use the DestroyCursor function to
	  destroy any private cursors it loads with the following line:
	
	  An application should use the <B>DestroyCursor</B> function to destroy
	  any private cursors it creates with the <B>CreateCursor</B> function.
	
	- On page 577, modify the documentation for the LoadIcon function to replace
	  the following line:
	
	  An application should use the DestroyIcon function to destroy
	  any private icons it loads.
	
	  with the following line:
	
	  An application should use the <B>DestroyIcon</B> function to destroy
	  any private icons it creates using the <B>CreateIcon</B> function.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          : kbdocfix kb16bitonly kbCursor kbIcon kbResource kbSDKPlatform 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
