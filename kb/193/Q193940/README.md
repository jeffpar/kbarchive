---
layout: page
title: "Q193940: FIX: Wingdings/Webdings/FoxPrint Not Printing from Windows 98"
permalink: kb/193/Q193940/
---

## Q193940: FIX: Wingdings/Webdings/FoxPrint Not Printing from Windows 98

	Article: Q193940
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbvfp300bBUG kbvfp300BUG kbvfp500aBUG kbvfp500bug kbvfp600bug kbVS600sp2
	Last Modified: 21-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a non-Postscript printer driver in Windows 98, the Wingdings,
	Webdings, and FoxPrint fonts do not print correctly. However, you may see the
	fonts print correctly using the HP Laserjet 4000 driver. Other Postscript
	printer drivers may also print the fonts correctly.
	
	RESOLUTION
	==========
	
	These fonts will print if the printer driver option to Print True Types as
	Graphic is chosen in the printer's options.
	
	NOTE: Printing True Types as Graphic may cause other printing issues, so make
	sure that you test this before implementing it.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3. For more information
	about Visual Studio service packs, please see the following articles in the
	Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	The following code creates an array that holds all of the installed fonts. The
	name of the font and an example of how the font looks prints on the printer and
	displays on the Visual FoxPro desktop. This program runs under any version of
	FoxPro.
	
	Steps to Reproduce Behavior
	---------------------------
	
	Run the following code:
	
	        CLEAR
	        AFONT(aFonts)
	        SET PRINTER ON
	        SET DEVICE TO PRINTER
	
	        FOR i = 1 TO ALEN(aFonts)
	            ?aFonts(i)
	            ??chr(9) + aFonts(i) FONT aFonts(i)
	        ENDFOR
	
	        SET PRINTER TO
	        SET PRINTER OFF
	        SET DEVICE TO SCREEN
	
	NOTE: The Wingdings font example generally prints in the Times New Roman font
	instead of in the Wingdings font. Both the Wingdings and Webdings font display
	correctly on the screen.
	
	Additional query words: kbVFp600 kbPrinting kbVFp300b kbVFp500 kbVFp500a KBDSE
	
	======================================================================
	Keywords          : kbservicepack kbvfp300bBUG kbvfp300BUG kbvfp500aBUG kbvfp500bug kbvfp600bug kbVS600sp2 kbVS600SP1 kbVS600sp3fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
