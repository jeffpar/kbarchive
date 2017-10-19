---
layout: page
title: "Q191440: CG4: Animated GIFs Only Animate in Web Browsers"
permalink: /kb/191/Q191440/
---

## Q191440: CG4: Animated GIFs Only Animate in Web Browsers

	Article: Q191440
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbgraphic kbhtml
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Clip Gallery 4.0 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you insert an animated GIF (CompuServe Graphics Interchange Format) image
	into a client application's document such as Microsoft Word, Microsoft
	PowerPoint or Microsoft Publisher 98, only the first frame of the animated GIF
	is displayed. However, once the document is converted to HyperText Markup
	Language (HTML) format and displayed in a Web browser capable of playing the
	animation, the frames that comprise the animated GIF play and appear animated.
	
	You can view the animation sequence of an animated GIF by clicking the Play
	button when you are viewing the animated GIF in Clip Gallery 4.0. Although Clip
	Gallery 4.0 allows you to play the animated GIF, Clip Gallery does not provide
	any play capability for the client application.
	
	CAUSE
	=====
	
	The animated GIF is intended for use within a Web browser capable of displaying
	each frame that comprises the animation sequence. Microsoft Clip Gallery 4.0
	provides the capability for displaying the animation to allow you to preview how
	the animation sequence will appear when the GIF is displayed in a Web browser
	capable of playing the frame sequence.
	
	Client applications that provide web authoring capabilities do not contain
	functionality that allows the frames of an animated GIF to be played. Hence,
	they display the first frame of the animated GIF only. Client applications, such
	as Microsoft Word, Microsoft PowerPoint, and Microsoft Publisher as well as
	other programs, are designed to display a static image, which is the first frame
	of an animated GIF.
	
	MORE INFORMATION
	================
	
	Clip Gallery 4.0 is a media cataloging program that works with any application
	that allows the use of an Object Linking and Embedding (OLE) server. However,
	Clip Gallery is intended to provide a means of cataloging clip art, motion, and
	audio content for use within client applications rather than as a mechanism for
	playing animated GIFs or movie formats, such as Audio Video Interleave (AVI).
	
	The CompuServe Graphics Interchange Format version 89a allows a single GIF file
	to contain multiple pictures. If a GIF file contains several pictures, and there
	are only slight changes between each picture, that file is often called an
	"animated GIF."
	
	Many Internet browsers (such as Microsoft Internet Explorer and Netscape
	Navigator) are specially designed so that when they display a GIF file that
	contains multiple pictures, they display the individual pictures in sequence.
	
	Unlike the Microsoft Video for Windows (.avi) and Apple QuickTime Movie formats,
	the GIF format is primarily designed to display static pictures, not for
	animation. The most common reason to create an animated GIF is to provide
	multimedia effects to HTML documents on the World Wide Web. For this reason, the
	only types of programs that display the animation effects fall into one of these
	categories:
	
	- Web browsers
	
	- Animated GIF editing programs (such as Microsoft GIF Animator, which ships
	  with Microsoft FrontPage 98)
	
	- Media cataloging programs (such as Microsoft Clip Gallery 4.0, which ships
	  with Microsoft Publisher 98.)
	
	Very few programs not in one of these categories display animated GIF files as
	animated.
	
	Although Help within the various Microsoft programs discusses the animated GIF to
	some degree, the behavior of the animated GIF within a client program may not be
	specific. For example, there may exist certain computer configurations that
	allow you to preview the animation sequence of a GIF within a client
	application. However, the intended behavior of an animated GIF within a client
	program is to display the first frame of the image rather then playing the
	sequenced frame set.
	
	Please refer to the client program's online documentation to determine how to
	export or save the file as HTML to ensure the animation sequence of an animated
	GIF will display within a Web browser capable of displaying the animation.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191396 PUB98: Animated GIFs Animate in Programs Supporting Animation
	
	  Q154814 PUB97: Animated GIFs Don't Animate After Exporting as HTML
	
	
	Please refer to your Web browser documentation to determine if your browser is
	capable of playing the animated GIF.
	
	Additional query words: graphics, motion animation GIF GIF89a play frames browser animate OLE server
	
	======================================================================
	Keywords          : kbgraphic kbhtml 
	Technology        : kbWordSearch kbFrontPageSearch kbExcelSearch kbPowerPtSearch kbWorksSearch kbPublisherSearch kbClipGallerySearch kbClipGallery400 kbHomePubSearch kbPhotoDrawSearch
	Version           : WINDOWS:4.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
