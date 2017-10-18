---
layout: page
title: "Q145698: PRB: Mnemonic Differences Between MFC 4.0 and Visual Basic 4.0"
permalink: kb/145/Q145698/
---

## Q145698: PRB: Mnemonic Differences Between MFC 4.0 and Visual Basic 4.0

	Article: Q145698
	Product(s): Microsoft C Compiler
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbActiveX kbCOMt kbCtrlCreate kbKeyAccel kbMFC kbVC400 kbVC500 kbVC600 kbGrpDSMF
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, version 4.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft OLE Control Developer's Kit (CDK) 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	NOTE: Microsoft Visual C++ NET (2002) supported both the managed code model that is provided by the .NET Framework and the unmanaged native Windows code model. The information in this article applies to unmanaged Visual C++ code only.
	
	SYMPTOMS
	========
	
	An accelerator table provided by way of COleControl::OnGetControlInfo that
	describes an OLE control's mnemonic keys does not work in both MFC 4.0 and
	Visual Basic 4.0 OLE control containers.
	
	CAUSE
	=====
	
	Visual Basic 4.0 and MFC 4.0 provide different mnemonic handling
	implementations, so they require different accelerator table entries.
	
	RESOLUTION
	==========
	
	Create accelerator table entries that will allow a control's mnemonics to be
	handled in both a Visual Basic 4.0 and MFC 4.0 OLE control container.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	An OLE control overrides the virtual COleControl::OnGetControlInfo method to
	allow its container to get a description of the control's mnemonic keys. The
	OnGetControlInfo method returns a filled-out structure of type CONTROLINFO that
	contains, among other things, a handle to an accelerator table. This accelerator
	table is used by the container to do checks for mnemonic keys. When the
	container determines that a control's mnemonic key was pressed, it calls the
	control's IOleControl::OnMnemonic method. This causes the MFC framework to call
	the virtual COleControl::OnMnemonic method, which the control can override to do
	special processing.
	
	The Visual Basic 4.0 and MFC 4.0 OLE control mnemonic handling implementations
	have different requirements for the entries in the accelerator table returned by
	way of OnGetControlInfo.
	
	An accelerator key used in an accelerator table is defined by the ACCEL
	structure. The ACCEL structure has the following definition:
	
	     typedef struct tagACCEL
	     {
	         BYTE   fVirt;
	         WORD   key;
	         WORD   cmd;
	     } ACCEL;
	
	The fVirt member specifies the accelerator flags. This member can be a
	combination of the following values:
	
	  Value       Meaning
	  ---------------------------------------------------------------------
	  FALT        The ALT key must be held down when the accelerator key is
	              pressed.
	
	  FCONTROL    The CTRL key must be held down when the accelerator key
	              is pressed.
	
	  FNOINVERT   Specifies that no top-level menu item is highlighted when
	              the accelerator is used. If this flag is not specified, a
	              top-level menu item will be highlighted, if possible,
	              when the accelerator is used.
	
	  FSHIFT      The SHIFT key must be held down when the accelerator key
	              is pressed.
	
	  FVIRTKEY    The key member specifies a virtual-key code. If this flag
	              is not specified, key is assumed to specify an ASCII
	              character code.
	
	The key member specifies the accelerator key. This member can be either a
	virtual-key code or an ASCII character code.
	
	The cmd member specifies the accelerator identifier. This value is placed in the
	low-order word of the wParam parameter of the WM_COMMAND or WM_SYSCOMMAND
	message when the accelerator is pressed.
	
	Visual Basic 4.0 has the following requirements for accelerator table entries
	used for mnemonic handling:
	
	- The fVirt member must be a combination of (FVIRTKEY | FALT) or (FVIRTKEY |
	  FALT | FSHIFT).
	
	- The key member must be uppercase.
	
	- The cmd member must not be equal to 0.
	
	MFC 4.0 has the following requirements for accelerator table entries used for
	mnemonic handling:
	
	- The fVirt member must be FALT or 0.
	
	- The key member must be lowercase.
	
	- The cmd member is ignored.
	
	MFC 4.0 OLE control containers also differ from Visual Basic 4.0 in the way they
	handle mnemonic processing when a control is UI active. When handling keyboard
	input MFC containers, first check to see if an OLE control has the focus. If it
	does, the framework calls its IOleInPlaceActiveObject::TranslateAccelerator
	method. In the COleControl implementation of this method the control's
	PreTranslateMessage function is called. In order for an OLE control to have its
	mnemonics function correctly when the control is UI active, the OLE control must
	override PreTranslateMessage and check for its special key combinations.
	
	NOTE: Overriding PreTranslateMessage is not necessary if the control is generated
	with Visual C++ 5.0 or above because OnMnemonic will be called when the control
	is UI active by way of SendMnemonic in COccManager::IsDialogMessage.
	
	The following sample code shows an overridden OnGetControlInfo,
	PreTranslateMessage, and OnMnemonic that allow a control's mnemonics to work
	correctly in both an MFC 4.0 OLE control container as well as a Visual Basic 4.0
	container.
	
	Sample Code
	-----------
	
	  /* Compile options needed: None
	  */ 
	  #define NUM_ENTRIES 4
	  void CMnemonicCtrl::OnGetControlInfo(LPCONTROLINFO lpi)
	  {
	    HACCEL hAccel = NULL;
	    TCHAR ch = 'm';   // Hard code the mnemonic key to 'm' for this
	                      // example.
	    ACCEL accKey[NUM_ENTRIES];
	    // Accel table entries 0 and 1 are to work with Visual Basic 4.0 as a
	    // container. Visual Basic 4.0 has the following requirements for
	    // accel table entries for a control's mnemonics:
	    // 
	    //  (fVirt == FVIRTKEY | FALT) || (fVirt == FVIRTKEY | FALT | FSHIFT)
	    //  key must be uppercase
	    //  (cmd != 0)
	    accKey[0].fVirt = FVIRTKEY | FALT;
	    accKey[1].fVirt = FVIRTKEY | FALT | FSHIFT;
	    accKey[0].key = accKey[1].key = LOBYTE(VkKeyScan(ch));
	    accKey[0].cmd = accKey[1].cmd = 1;
	    // Accel table entries 2 and 3 are to work with MFC 4.0 containers.
	    // MFC containers have the following requirements for accel table
	    // entries for a control's mnemonics:
	    // 
	    //  (fVirt == FALT) || (fVirt == 0)
	    //  key should be lowercase
	    //  cmd is ignored
	    accKey[2].fVirt = FALT;
	    accKey[3].fVirt = 0;
	    accKey[2].key = accKey[3].key = ch;
	    accKey[2].cmd = accKey[3].cmd = 1;
	    // Create the accel table.
	    hAccel = CreateAcceleratorTable(accKey, NUM_ENTRIES);
	    if (hAccel != NULL)
	    {
	      // Fill in the CONTROLINFO structure passed in.
	      lpi -> hAccel = hAccel;
	      lpi -> cAccel = NUM_ENTRIES;
	      lpi -> dwFlags = 0;
	    }
	    else
	      COleControl::OnGetControlInfo(lpi);
	  }
	  // NO need to override PreTranslateMessage if the control is generated in
	  // Visual C++ 5.0 or above.
	  BOOL CMnemonicCtrl::PreTranslateMessage( MSG * pMsg )
	  {
	    // Check for ALT-M key combination.
	    if(pMsg->message == WM_SYSKEYDOWN) {
	      if((pMsg->wParam == 'm')||(pMsg->wParam == 'M'))
	      {
	        // Do mnemonic key processing here.
	        return TRUE;
	      }
	    }
	    return COleControl::PreTranslateMessage(pMsg);
	  }
	  void CMnemonicCtrl::OnMnemonic(LPMSG pMsg)
	  {
	    if ((pMsg->message == WM_SYSKEYDOWN)||
	        (pMsg->message == WM_SYSCHAR))
	    {
	      if ((pMsg->wParam == 'm')||(pMsg->wParam == 'M'))
	      {
	        // Do mnemonic key processing here.
	        return;
	      }
	    }
	    COleControl::OnMnemonic(pMsg);
	  }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbActiveX kbCOMt kbCtrlCreate kbKeyAccel kbMFC kbVC400 kbVC500 kbVC600 kbGrpDSMFCATL kbAcceleratorKey 
	Technology        : kbAudDeveloper kbMFC
	Version           : :4.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
