---
layout: page
title: "Q84926: PRB: Loading Metafile Causes &quot;Cannot Convert Picture&quot; Error"
permalink: kb/084/Q84926/
---

## Q84926: PRB: Loading Metafile Causes &quot;Cannot Convert Picture&quot; Error

	Article: Q84926
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbSDKWin16
	Last Modified: 26-JUN-1999
	
	3.00 3.10
	WINDOWS
	kbprg kbprb
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an application attempts to load a metafile from disk, the following error
	message is displayed:
	
	  Cannot convert picture
	
	CAUSE
	=====
	
	Some Windows applications expect to load a "placeable" metafile, which has 22
	additional bytes, at the beginning of a normal metafile. Both metafile types use
	the .wmf file extension; only the contents of the file change.
	
	In an application, the GetMetaFile function does not read a placeable metafile
	correctly; however, it returns a non-NULL value, which indicates success.
	
	RESOLUTION
	==========
	
	Load the metafile into an application that will accept both metafile types and
	save the metafile in an appropriate type. The following applications accept
	"placeable" metafiles: Aldus PageMaker, Microsoft PowerPoint, Micrografx, Corel
	Draw, Microsoft Draw, Microsoft Graph, Microsoft Equation Editor, and Microsoft
	Publisher.
	
	For more information on placeable metafiles, query on the following words in the
	Microsoft Knowledge Base:
	
	  prod(winsdk) and placeable and metafile
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbprb
	
	=============================================================================
	
