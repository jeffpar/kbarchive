---
layout: page
title: "Q82860: The WIN.INI &#91;Compatibility&#93; Section"
permalink: /kb/082/Q82860/
---

## Q82860: The WIN.INI &#91;Compatibility&#93; Section

	Article: Q82860
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-DEC-2000
	
	3.10 3.11
	WINDOWS
	kbenv
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses the Microsoft Windows version 3.1 WIN.INI [Compatibility]
	section.
	
	MORE INFORMATION
	================
	
	Compatibility bits are defined in the [Compatibility] section of the WIN.INI
	file for the following applications:
	
	- Microsoft Publisher
	
	- Microsoft Money
	
	- Microsoft Works
	
	- WordPerfect
	
	- Lotus Freelance
	
	- CC Mail
	
	- Microsoft Visual Basic
	
	- Ami Pro
	
	- Pixie
	
	- ObjectVision
	
	- Cricket Presents
	
	- Just Write
	
	- ExploreNet
	
	- Aporia
	
	- Packrat
	
	- Microcourier
	
	- Guide
	
	- Microsoft Excel
	
	- Ascend
	
	- MGX Draw
	
	- AccPack
	
	- Charisma
	
	- Persuasion
	
	- Ingress
	
	- Lotus Notes
	
	- Microsoft Draw
	
	- Turbo Tax
	
	When an application loads under Windows 3.1, KERNEL.EXE checks to see if the
	application was compiled exclusively for Windows 3.1. If the application was
	compiled for Windows 3.0, and will therefore run under Windows 3.0 or 3.1,
	KERNEL.EXE checks the module name and determines if any bits are defined for
	that name in the [Compatibility] section of the WIN.INI file.
	
	The following is a detailed explanation of compatibility bits. The symbolic name
	is defined in WINDOWS.H. The problem, listed for each application, will be fixed
	if the compatibility bit is defined. If these switches are in the
	[Compatibility] section of the WIN.INI file then these problems will not occur.
	The Windows 3.1 Setup program automatically inserts these switches into the
	WIN.INI, regardless of whether or not that application is on the machine.
	
	The symbolic names are internal only, they are not in the WINDOWS.H that ships
	with the Software Development Kit (SDK).
	
	Bit: 1
	------
	
	Symbolic name: GACF_IGNORENODISCARD
	Meaning: Ignore NODISCARD flag if passed to GlobalAlloc(). C 6.x
	        Runtime install library was allocating global memory
	        improperly by incorrectly specifying the GMEM_NODISCARD bit.
	Apps:
	  Publisher
	     WIN.INI Line: notshell=0x0001
	     Problem: Setup for MS apps. does not work on 1M 286 machine.
	  Money
	     WIN.INI Line: notshell=0x0001
	     Problem: Setup for MS apps. does not work on 1M 286 machine.
	  Works
	     WIN.INI Line: notshell=0x0001
	     Problem: Setup for MS apps. does not work on 1M 286 machine.
	
	Bit: 2
	------
	
	Symbolic name: GACF_FORCETEXTBAND
	Meaning: Separate text band from graphics band. Forces separate band
	        for text, disallowing 3.1 optimization where Text and
	        Graphics are printed in the same band. Word Perfect was
	        assuming text had to go in second band.
	Apps:
	  WordPerfect
	     WIN.INI Line: WPWINFIL=0x0006
	     Problem: Can't print graphics in landscape mode. The
	              compatibility switch doesn't completely fix the
	              problem, just fixes it for certain memory
	              configurations.
	  Freelance
	     WIN.INI Line: rem=0x8022
	     Problem: Freelance couldn't print presentation (.pre) files.
	
	Bit: 4
	------
	
	Symbolic name: GACF_ONELANDGRXBAND
	Meaning: One graphics band only. Allows only one Landscape graphics
	        band. Take as much memory as possible for this band. What
	        doesn't fit in that band doesn't print.
	Apps:
	  WordPerfect
	     WIN.INI Line: WPWINFIL=0x0006
	     Problem: Can't print graphics in landscape mode. The
	              compatibility switch doesn't completely fix the
	              problem, just fixes it for certain memory
	              configurations.
	
	Bit: 8
	------
	
	Symbolic name: GACF_IGNORETOPMOST
	Meaning: Ignore topmost windows for GetWindow(HWND,GW_HWNDFIRST)
	Apps:
	  CCMail
	     WIN.INI Line: ccmail=0x0008
	     Problem: CCMail would GP fault when running any Windows applet
	              from CCMail because it assumed the applet it starts
	              will be at the top of the window list when winexec
	              returns. Because of the addition of TOPMOST windows in
	              Win 3.1, this isn't the case.  The compatibility bit
	              fixes this so GetWindow doesn't return a topmost
	              window.
	
	Bit: 10
	-------
	
	Symbolic name: GACF_CALLTTDEVICE
	Meaning: Set the DEVICE_FONTTYPE bit in the FontType for TT fonts
	        returned by EnumFonts().
	Apps:
	  Ami Pro
	     WIN.INI Line: Amipro=0x0010
	     Problem: Font mapping problems, described below.
	  WordPerfect
	     WIN.INI Line: win2wrs=0x1210
	     Problem: WordPerfect was assuming TT fonts enumerated by the
	              printer would have the device bit set. TT fonts are not
	              device fonts, so this bit wasn't set. There were
	              various font mapping problems, such as TNR appearing in
	              Script or Symbol.
	
	Bit: 20
	-------
	
	Symbolic name: GACF_MULTIPLEBANDS
	Meaning: Manually break graphics output into more than one band when
	        printing.
	Apps:
	  Freelance
	     WIN.INI Line: Rem=0x08022
	     Problem: Freelance wouldn't print graphics when there was enough
	              memory and unidrv used only one band for printing. If
	              the first band was the entire page, it didn't issue any
	              graphics calls, thinking it was the text only band.
	              This forces unidrv to use multiple bands.
	
	Bit: 40
	-------
	
	Symbolic name: GACF_ALWAYSSENDNCPAINT
	Meaning: SetWindowPos() must send a WM_NCPAINT message to all
	        children, disallowing the 3.1 optimization where this message
	        is only sent to windows that must be redrawn.
	Apps:
	  Pixie
	     WIN.INI Line: pixie=0x0040
	     Problem: File window overlaps the toolbox and doesn't repaint
	              when a new file is opened.  Pixie used the receipt of
	              WM_NCPAINT messages to determine that they may need to
	              reposition themselves at the top of the list.  Win 3.0
	              used to send the messages to windows even when they
	              didn't need to be sent; in particular if the window was
	              within the bounding rect of any update region involved
	              in a window management operation.
	  ObjectVision
	     WIN.INI Line: Vision=0x0040
	     Problem: Repaint problems with dialog boxes left on the screen
	              after file.open or file.new operations.
	  Cricket Presents
	     WIN.INI Line: cp=0x0040
	     Problem: Tool window is not available when opening the app.
	
	Bit: 80
	-------
	
	Symbolic name: GACF_EDITSETTEXTMUNGE
	Meaning: Strings that are passed to Edit Controls by WM_SETTEXT are
	        forced to upper case. Just Write was expecting this
	        behavior, which was a bug in 3.0.
	Apps:
	  Just Write
	     WIN.INI Line: JW=0x42080
	     Problem: Just Write wouldn't change the extension in the
	              file.open dialog when opening a file of a different
	              format. Just Write calls SetDlgItemText to set the
	              default extension in edit controls during WM_INITDIALOG
	              processing. SetDlgItemText ultimately calls text
	              insert routine which had a bug in 3.0 where it
	              converted the case of the text passed in dependent on
	              edit control style. Thus, under 3.0, SetDlgItemText
	              was (wrongly) modifying the string passed in. The app
	              has worked around the bug in 3.0 and is now failing in
	              3.1 since the bug has been fixed. The compatibility
	              bit reverts to 3.0 behavior.
	
	Bit: 100
	--------
	
	Symbolic name: GACF_MOREEXTRAWNDWORDS
	Meaning: Add 4 to the extra bytes (CBWNDEXTRA) in the window instance
	        and class instance structures. In Windows 3.0, even if you
	        didn't allocate extra window/class words, you could still
	        access them and corrupt Windows internally. In Windows 3.1,
	        you are prevented from accessing extra words you didn't allocate
	        so that apps won't corrupt windows. This switch forces
	        extra words for all classes/windows created by the given
	        application.
	Apps:
	  Compton's MM Ency
	     WIN.INI Line: TME=0x0100
	     Problem: Crashes choosing atlas. Caused by not initializing the
	              WNDCLASS.cbWndExtra field.
	  ExploreNet
	     WIN.INI Line: netset2=0x0100
	     Problem: Application error selecting update in "Input Form"
	              window. Caused by the app specifying 0 extra bytes
	              when creating the window class.
	  Aporia 1.4
	     WIN.INI Line: aporia=0x0100
	     Problem: Aporia icons don't appear on the desktop. Hangs the
	              system. App says it wants 1 extra byte in the
	              RegisterClass, then does a SetWindowWord (2 bytes),
	              then GetWindowLong (4 Bytes).
	
	Bit: 200
	--------
	
	Symbolic name: GACF_TTIGNORERASTERDUPE
	Meaning: Don't enumerate Duplicate bit map fonts for TT fonts. Times
	        New Roman was displayed and printed as a vector font. We
	        install bit map fonts for Arial and Times New Roman at sizes
	        8,10 (EGA resolution). When we enumerate fonts for face names
	        Arial and Times New Roman, we would enumerate the sizes
	        available in the bit map fonts and one size for the
	        corresponding true type font. This confused the font mapper
	        in WordPerfect. It would somehow get confused into believing
	        that a TNR font was available for only the two bit map sizes
	        and map a request for a larger size to a Roman vector font.
	Apps:
	   Word Perfect
	     WIN.INI Line: Win2wrs=0x01210
	     Problem: Some fonts displayed as vector fonts. GDI will not
	              enumerate raster fonts which have the same face or
	              family name as a TT font if TT is enabled and the
	              compatibility bit is set.
	   Visual Basic
	      WIN.INI Line: vb=0x0200
	      Problem: Reports duplicate font sizes.
	
	Bit: 800
	--------
	
	Symbolic name: GACF_DELAYHWHNDSHAKECHK
	Meaning: Don't check hardware handshaking on SetCommState(). Do not
	        check hardware handshaking (CTS and DSR) on SetCommState().
	        (Reverts to 30 behavior.) Packrat could not Dial. It only
	        checked for DSR, but this is not set until carrier detect. A
	        bug existed in win30 where SetCommState never checked DSR and
	        CTS. If a serial printer was off-line, data would be sent to
	        the COM port anyway, causing lost data.
	Apps:
	   Packrat
	     WIN.INI Line: packrat=0x0800
	     Problem: Packrat didn't dial using modem on COM2.
	   Microcourier
	     WIN.INI Line: mcourier=0x800
	     Problem: Couldn't connect to modem using COM2.
	
	Bit: 1000
	---------
	
	Symbolic name:  GACF_ENUMHELVNTMSRMN
	Meaning: Enumerates TmsRmn and Helv. Some apps are broken because they
	        relied on 3.0 fonts Helv and Tms Rmn by name. Font
	        Substitution covers much of these problems but we cannot
	        legally enumerate Helv and Tms Rmn for future apps, so it was
	        dropped. We still have the exact same fonts, but now under
	        the names MS Sans Serif and MS Serif, and will enumerate them
	        as Helv and Tms Rmn when this bit is set. (We are allowed to
	        do this for backwards compatibility.)
	Apps:
	   Spinnaker +
	     WIN.INI Line: plus=0x01000
	     Problem: Text alignment and spacing problems in buttons and
	              titles. Fix only works if Smallfonts come after serif
	              and sans serif entries. Setup does this automatically.
	   Milestones, etc.
	     WIN.INI Line: milesv3=0x1000
	     Problem: Text is unreadable when the app is started. App does
	              its own font mapping and gets confused when it can't
	              find Tms Rmn.
	   Guide
	     WIN.INI Line: guide=0x1000
	     Problem: Text problems.
	   Excel
	     WIN.INI Line: Excel=0x1000
	     Problem: Can't get past point where you have to enter a point
	              size in the tutorial.
	   WordPerfect
	     WIN.INI Line: win2wwrs=0x1210
	     Problem: Uses a vector font for TmsRmn.
	
	Bit: 2000
	---------
	
	Symbolic name:  GACF_ENUMTTNOTDEVICE
	Meaning: Turns off DEVICE_FONTTYPE. Some apps fail to enumerate more
	        that one size of true type fonts because they interpret the
	        DEVICE_FONTTYPE flag incorrectly. They assume the font must
	        be device resident and disregard the case where the font is
	        downloaded (as TT can be).  Therefore, when TT is correctly
	        enumerated with the device bit set, the apps check the device
	        capabilities to see if the printer can scale fonts. If the
	        device cannot, the app assumes one size of for the current
	        font. This problem is not seen on postscript printers which
	        can download and scale fonts, nor on dot matrix printers
	        which cannot download fonts. This Compatibility bit simply
	        checks all the above conditions and selectively turns the
	        DEVICE_FONTTYPE off.
	Apps:
	   Pagemaker 4.0
	     WIN.INI Line: pm4=0x2000
	     Problem: Not all point sizes listed for some printers.
	   Designer 3.1
	     WIN.INI Line: designer=0x2000
	     Problem: Font size reverts to 6 point when selecting a TT font
	              in the font dialog.
	   Ascend 3.1
	     WIN.INI Line: planner=0x2000
	     Problem: TT fonts only allow one point size.
	   MGXDraw 3.0
	     WIN.INI Line: draw=0x2000
	     Problem: Shows no font sizes for TT fonts.
	   AccPack
	     WIN.INI Line: winsim=0x2000
	     Problem: Lists only one point size for TT fonts.
	   Charisma
	     WIN.INI Line: charisma=0x2000
	     Problem: Not all point sizes listed for some printers.
	   Persuasion
	     WIN.INI Line: pr2=0x2000
	     Problem: Lists only one point size for TT fonts.
	   Just Write
	     WIN.INI Line: jw=0x42080
	     Problem: Lists only one or two point sizes for TT fonts.
	
	Bit: 4000
	---------
	
	Symbolic name:  GACF_SUBTRACTCLIPSIBS
	Meaning:  This flag affects the way window invalidation works for non-
	         WS_CLIPSIBLINGS parent windows and their children (e.g.,
	         dialog boxes and dialog controls). Normally, if two
	         children of a non-WS_CLIPSIBLING parent overlap, and an area
	         that contains both of those windows is invalidated (either
	         by a call to InvalidateRect or through window
	         rearrangement), both of the windows will get invalidated,
	         even if one or both is WS_CLIPSIBLINGS. With
	         GACF_SUBTRACTCLIPSIBS, any sibling window underneath a
	         WS_CLIPSIBLINGS window will not be invalidated in the part
	         of the window that is beneath the WS_CLIPSIBLINGS window.
	         This situation arises most commonly when windows that are
	         supposed to appear overlapped don't seem to overlap
	         properly. Applications that implement drop down combo boxes
	         as child windows of dialog boxes will exhibit this problem
	         (e.g., Lotus Notes 2.1 drive drop downs). It's often hard to
	         tell whether a drop down is implemented as a top-level
	         window (e.g., the Windows system combo boxes) or as a child
	         window -- if there seem to be overlapping problems, then
	         GACF_SUBTRACTCLIPSIBS could be the solution.
	Apps:
	   Lotus Notes 2.0 & 1
	     WIN.INI Line: _BNOTES=0x24000
	     Problem: Pull down drive list box pops down behind a list box
	              which is already on the screen.
	   Ingress
	     WIN.INI Lines: wagl=0x4000
	                    waglr=0x4000
	     Problem: Overlapping child controls.
	
	Bit: 8000
	---------
	
	Symbolic name: GACF_FORCETTGRAPHICS
	Meaning:
	Apps:
	   Freelance
	     WIN.INI Line: rem=0x8022
	     Problem: Freelance wouldn't print TT unless print TT as graphics
	              was selected.
	
	Bit: 10000
	----------
	
	Symbolic name: GACF_NOHRGN1
	Meaning:  This bit affects applications that depend on a bug in the
	         3.0 GetUpdateRect() function. Under 3.0, GetUpdateRect
	         would not always return the rectangle in logical DC
	         coordinates: if the entire window was invalid, the rectangle
	         was sometimes returned in window coordinates. This bug was
	         fixed for 3.0 and 3.1 apps in Windows 3.1: coordinates are
	         ALWAYS returned in logical coordinates. This bit re-
	         introduces the bug in GetUpdateRect(), for those
	         applications that depend on this behavior.
	Apps:
	   MSDraw
	     WIN.INI Line: ED=0x00010000
	     Problem: Canvas not redrawn properly opening specific MSDraw
	              objects in Winword.
	
	Bit: 20000
	----------
	
	Symbolic name: GACF_NCCALCSIZEONMOVE
	Meaning: 3.1 optimized WM_NCCALCSIZE if a window was just moving,
	        where 3.0 always sent it. This bit causes it to be sent
	        always, as in 3.0.
	Apps:
	   Lotus Notes
	     WIN.INI Line: _BNOTES=0x24000
	     Problem: Navigator bar of window fails to redraw when the window
	              is moved across the desktop.
	
	Bit: 40000
	----------
	
	Symbolic name: GACF_SENDMENUDBLCLK
	Meaning: Passes double-clicks on a menu bar on to the app. With this
	        bit set, if the user double clicks on the menu bar when a
	        menu is visible, we end processing of the menu and pass the
	        double click message on to the application. This allows Just
	        Write to detect double click on the system menu of a
	        maximized MDI child.    The normal (and expected) behavior is
	        for Windows to detect the double click on a sys menu of a
	        maximized child and send the app a WM_SYSCOMMAND SC_CLOSE
	        message which is what happens with a non-maximized MDI child
	        window.
	Apps:
	   Just Write
	     WIN.INI Line: JW=0x00042080
	     Problem: Sub-editors (such as footer and header editors)
	              couldn't be closed by double-clicking the system menu.
	
	Bit: 80000
	----------
	
	Symbolic name: GACF_30AVGWIDTH
	Meaning: Changed the way we calculate avg width, this fixes it for
	        postscript. Scale all fonts by 7/8. This flag has been
	        added for TurboTax for printing with pscript driver. Turbo
	        Tax has hard coded average width it uses for selecting fonts.
	        Since we changed the way we calculate avg width to match what
	        is in TT, Turbo Tax is broken.
	Apps:
	   TurboTax
	     WIN.INI Line: turbotax=0x80000
	     Problem: 1040 tax forms wouldn't print correctly.
	
	If a third party vendor fixes the problems in their application, they can
	recompile it so that it requires Windows 3.1; the compatibility bits will not be
	used. If the third party vedor wants their application to run under Winodws 3.0
	and 3.1, then they can change the module name or edit the WIN.INI.
	
	Additional query words: 3.10 bitmap
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	
	=============================================================================
	
