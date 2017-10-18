---
layout: page
title: "Q161724: PPT7: Running PowerPoint Animations with Netscape Navigator 3.x"
permalink: kb/161/Q161724/
---

## Q161724: PPT7: Running PowerPoint Animations with Netscape Navigator 3.x

	Article: Q161724
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbdta
	Last Modified: 28-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you open a Web page in Netscape Navigator 3.x that contains a PowerPoint
	Animation (.ppz) file, the PowerPoint animation may appear as a generic plug-in
	icon.
	
	MORE INFORMATION
	================
	
	There are two things to check for when this happens:
	
	1. Is the .ppz file in the logical root directory of the Web Server?
	
	2. Does the Web Server support the application MIME type?
	
	Netscape 3.x cannot run the ActiveX Animation from the logical root of a Web
	Server folder. For example: if Pres0.ppz is at the following HTTP address:
	http://SomeServer/Pres0.ppz, Netscape Navigator cannot run it.
	
	RESOLUTION
	==========
	
	To solve this problem, you must move the .ppz file to a subfolder under the
	logical root of your user directory.
	
	For example, suppose the file Pres0.ppz is initially in the root of a folder on a
	Web Server folder. Through a browser, the file would have the HTTP address of
	http://ServerName/Pres0.ppz. The owner of this folder creates a subfolder called
	Animations and moves Pres0.ppz into it. The file now has the address:
	http://ServerName/Animations/pres0.ppz. Netscape 3.x can run the file from the
	subfolder.
	
	In addition to moving the file to a subfolder, the appropriate HREF entries in
	the HTML file need to be updated to reflect the change in the address.
	
	Example
	-------
	
	The HTML original code segment for the in-place playing of the ActiveX Animation
	looks like this:
	
	     <OBJECT CLASSID="clsid:EFBD14F0-6BFB-11CF-9177-00805F8813FF"
	     WIDTH=800 HEIGHT=200>
	     <PARAM NAME="File" VALUE="pres0.ppz">
	     <EMBED WIDTH=800 HEIGHT=200 SRC="pres0.ppz"></EMBED>
	     <NOEMBED>
	     This page contains an ActiveX Animation that your browser was unable
	     to view.
	     <A HREF="pres0.ppz">Click here to open pres0.ppz fullscreen</A>
	     </NOEMBED>
	     </OBJECT>
	
	After moving the ppz file to the Animations subfolder, the code segment looks
	like this:
	
	     <OBJECT CLASSID="clsid:EFBD14F0-6BFB-11CF-9177-00805F8813FF"
	     WIDTH=800 HEIGHT=200>
	     <PARAM NAME="File" VALUE=" Animations/pres0.ppz">
	     <EMBED WIDTH=800 HEIGHT=200 SRC=" Animations/pres0.ppz"></EMBED>
	     <NOEMBED>
	     This page contains an ActiveX Animation that your browser was unable to
	     view.
	     <A HREF=" Animations/pres0.ppz">Click here to open pres0.ppz fullscreen</A>
	     </NOEMBED>
	     </OBJECT>
	
	NOTE: Microsoft Technical Support does not support modifying HTML code. You
	should always work with a copy of your original HTML document.
	
	In addition, the Web Server must be set up to properly serve the ActiveX
	Animation MIME file type. Netscape Navigator 3.x does not directly handle
	ActiveX Animations by the file type. It must be sent the MIME type of the file
	from the Web Server software.
	
	The syntax for the MIME entry is:
	
	  application/vnd.ms-powerpoint     ppz
	
	NOTE: Microsoft Technical Support does not support modifying third party Internet
	server software. If you are unsure about modifying the MIME type settings,
	please contact the software vendor for your Internet server software.
	
	For more information about entering the correct MIME information if you are using
	Microsoft Internet Information Server (IIS) or Microsoft Personal Web Server,
	please see the following articles here in the Microsoft Knowledge Base:
	
	  Q142558 Adding Mime Types to Internet Information Server
	
	
	  Q155730 How to Add MIME Types to Personal Web Server
	
	
	The products discussed here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 97 8.00 ppt8 ppt7 ppt97 ppt95
	
	======================================================================
	Keywords          : kb3rdparty kbdta 
	Technology        : kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerPt700Search
	Version           : WINDOWS:7.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
