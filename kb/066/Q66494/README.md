---
layout: page
title: "Q66494: Help Compiler Internal Error Possible Causes"
permalink: kb/066/Q66494/
---

## Q66494: Help Compiler Internal Error Possible Causes

	Article: Q66494
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The explanation of errors R2701 through R2709 is "Internal error," and the user
	is directed to contact Microsoft Product Support Services for clarification.
	This article contains information on these internal errors.
	
	MORE INFORMATION
	================
	
	
	The list is:
	
	  R2701: Creation of title b-tree has failed
	  R2703: Creation of bitmap file has failed.
	
	These two file creation failures can happen due to low memory, low disk space, or
	lack of file handles.
	
	  R2705: Phrase file does not exist.
	
	This error is given if the phrase file mysteriously disappears between the time
	it was created (or checked for existence) and when it is used. It might be
	caused by low disk space, or from compiling on the network.
	
	  R2707: Closing of file has failed.
	
	This is a disk error that is not out of memory, out of disk space, or out of file
	handles. It might indicate hard disk problems such as bad sectors, or too many
	files in one directory.
	
	  R2709: Opening output system file failed.
	
	If someone does encounter this error, they are using an old Beta version.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
