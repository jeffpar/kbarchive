---
layout: page
title: "Q83302: HOWTO: Use the WM_GETDLGCODE Message"
permalink: /kb/083/Q83302/
---

## Q83302: HOWTO: Use the WM_GETDLGCODE Message

	Article: Q83302
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kbDlg kbOSWin2000 kbSDKWin32 kbGrpDSUser kbOSWin310 kbWndw kbWndwMsg kbOSWin300
	Last Modified: 09-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows sends a WM_GETDLGCODE message to controls in a dialog box or in a window
	where the IsDialogMessage function handles keyboard input. Generally, an
	application processes the WM_GETDLGCODE message to prevent Windows from
	performing default processing in response to keyboard messages. The WM_KEYDOWN,
	WM_SYSCHAR, and WM_CHAR messages are examples of keyboard messages.
	
	This article discusses the various codes that make up the value returned from the
	WM_GETDLGCODE message.
	
	MORE INFORMATION
	================
	
	Windows sends a WM_GETDLGCODE message to a control for the following three
	reasons:
	
	- To determine whether the control will process a particular type of input.
	
	- To determine whether the text contents of an edit control are selected when,
	  as a result of the user pressing the TAB key, the edit control receives the
	  input focus.
	
	- To determine the type of a button.
	
	The following text documents the values of the wParam and lParam parameters for
	the WM_GETDLGCODE message:
	
	  Parameter    Description
	  ------------------------------------------------------------------------
	
	  wParam       Not used.
	
	  lParam       If lParam is not NULL, it is a far pointer to an MSG
	               structure that contains a message that is being sent to
	               the control. Windows versions 3.0 and 3.1 use lParam only
	               to send keyboard input to the control. Keyboard messages
	               include WM_KEYDOWN, WM_SYSCHAR, and WM_CHAR. Future
	               versions of Windows may use lParam to send other message
	               types to controls.
	
	The window procedure for each predefined control returns an appropriate value in
	response to a WM_GETDLGCODE message. The value is one or more of the following
	codes, combined with the Boolean OR operator:
	
	  Code                   Meaning
	  ------------------------------------------------------------------------
	
	  DLGC_BUTTON            Control is a button (of any kind).
	
	  DLGC_DEFPUSHBUTTON     Control is a default push button.
	
	  DLGC_HASSETSEL         Windows will send an EM_SETSEL message to the
	                         control to select its contents.
	
	  DLGC_RADIOBUTTON       Control is an option (radio) button.
	
	  DLGC_STATIC            Control is a static control.
	
	  DLGC_UNDEFPUSHBUTTON   Control is a push button but not the default
	                         push button.
	
	  DLGC_WANTALLKEYS       Control processes all keyboard input.
	
	  DLGC_WANTARROWS        Control processes arrow keys.
	
	  DLGC_WANTCHARS         Control processes WM_CHAR messages.
	
	  DLGC_WANTMESSAGE       Control processes the message in the MSG
	                         structure that lParam points to.
	
	  DLGC_WANTTAB           Control processes the TAB key.
	
	The return codes above can be used by user-defined controls or, in a subclass
	procedure, to modify the behavior of predefined controls. To subclass a control,
	call the predefined control's window procedure first, then modify the necessary
	bits in the return code.
	
	DLGC_WANTALLKEYS, DLGC_WANTARROWS,
	DLGC_WANTCHARS, DLGC_WANTMESSAGE, and DLGC_WANTTAB Return Codes
	--------------------------------------------------------------------------------------------------
	
	When a control processes the WM_GETDLGCODE message and the value it returns has
	one of the DLGC_WANT* bits set, the control will process the specified message
	type and Windows will not do any default processing for messages of the
	specified type.
	
	For example, the code returned by a list box includes DLGC_WANTARROWS to indicate
	that the list box processes arrow keys. When a list box has the focus and the
	user presses a DOWN ARROW key, Windows sends a WM_GETDLGCODE message to the list
	box. Because the return value includes the DLGC_WANTARROWS code, Windows allows
	the list box to process the arrow keystroke and performs no further processing.
	If the return value did not include the DLGC_WANTARROWS code, Windows would
	continue processing the arrow keystroke and would change the focus to the next
	control in the current control group.
	
	As another example, the value returned by an edit control includes the
	DLGC_WANTCHARS code while the value returned by a button does not. Consequently,
	if a button has the focus, and the user types a valid mnemonic character,
	Windows sets the focus to the control in the dialog box that corresponds to the
	mnemonic. (If a control has a mnemonic character, it is underlined in the
	control's label.) If an edit control has the focus and the user types a mnemonic
	character, however, Windows does not change the input focus because the edit
	control processes the resulting WM_CHAR message and Windows does not perform its
	default processing for a mnemonic character.
	
	DLGC_WANTMESSAGE Code
	---------------------
	
	A control returns a value that includes the DLGC_WANTMESSAGE code after it
	processes the message sent through the lParam that accompanies the WM_GETDLGCODE
	message. The DLGC_WANTMESSAGE code indicates that the application does not want
	default processing for the message to continue. The messages sent to the control
	include WM_KEYDOWN, WM_SYSCHAR, and WM_CHAR. Future versions of Windows could
	send other messages to controls using this mechanism.
	
	The following code provides an example of processing the WM_GETDLGCODE message in
	a control's subclass procedure. In the example, the user presses the "X" key to
	select a check box and presses the "O" key to clear the check bobox:
	
	     case WM_GETDLGCODE:
	        // Call the check box window procedure first
	        lRet = CallWindowProc(lpCheckProc, hWnd, wMessage, wParam,
	                              lParam);
	
	        // If lParam points to an MSG structure
	        if (lParam)
	        {
	           lpmsg = (LPMSG)lParam;
	           if (lpmsg->message == WM_CHAR)
	           {
	              if (lpmsg->wParam == 'x' || lpmsg->wParam == 'X')
	              {
	                 // Select the check box when user presses "X"
	                 SendMessage(hWnd, BM_SETCHECK, TRUE, 0);
	                 lRet |= DLGC_WANTMESSAGE;
	              }
	              else if (lpmsg->wParam == 'o' || lpmsg->wParam == 'O')
	              {
	                 // Clear the check box when user presses "O"
	                 SendMessage(hWnd, BM_SETCHECK, FALSE, 0);
	                 lRet |= DLGC_WANTMESSAGE;
	              }
	           }
	        }
	        return lRet;
	
	When a check box control's subclass procedure includes the code above, Windows
	performs no further processing for WM_CHAR messages for the X, x, O, and o
	characters because the value returned from WM_GETDLGCODE includes the
	DLGC_WANTMESSAGE code. In the example above, the control could have returned
	DLGC_WANTCHARS instead of DLGC_WANTMESSAGE because the WM_CHAR message is the
	only message processed by the control.
	
	DLGC_HASSETSEL Code
	-------------------
	
	An edit control returns a value that includes the DLGC_HASSETSEL code to indicate
	that Windows should select all the text in an edit control when the control
	receives the input focus through the tabbing sequence.
	
	For example, when a control in a dialog box receives the focus because the user
	pressed the TAB key, Windows sends a WM_GETDLGCODE message to the control. If
	the value returned from the edit control includes the DLGC_HASSETSEL code, the
	edit control indicates that all text in the edit control should be selected.
	Consequently, Windows sends an EM_SETSEL message to the control to select all
	its contents.
	
	An application can alter this behavior and prevent the contents from being
	selected when the control receives the focus through tabbing, by subclassing the
	edit control and removing the DLGC_HASSETSEL code from its return value. Note
	that the subclassing code below does not change any other bits in the return
	value.
	
	       // In the subclass procedure
	     case WM_GETDLGCODE:
	        // Call the original edit control window procedure
	        lRet = CallWindowProc(lpEditProc, hWnd, wMessage, wParam,
	                              lParam);
	
	        // Clear the DLGC_HASSETSEL bit from the return value
	        lRet &= ~DLGC_HASSETSEL;
	
	        return lRet;
	
	DLGC_BUTTON, DLGC_DEFPUSHBUTTON,
	DLGC_UNDEFPUSHBUTTON, DLGC_RADIOBUTTON, DLGC_STATIC Codes
	------------------------------------------------------------------------------------------
	
	These codes are used to determine a control's attributes.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDlg kbOSWin2000 kbSDKWin32 kbGrpDSUser kbOSWin310 kbWndw kbWndwMsg kbOSWin300 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	Issue type        : kbhowto
	
	=============================================================================
	
