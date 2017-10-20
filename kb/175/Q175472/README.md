---
layout: page
title: "Q175472: HOWTO: Get Network Adapter Address from Visual Basic"
permalink: /kb/175/Q175472/
---

## Q175472: HOWTO: Get Network Adapter Address from Visual Basic

{% raw %}

	Article: Q175472
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnetwork kbAPI kbNetBIOS kbSDKPlatform kbGrpDSNet
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 4.0, 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	IPX and NETBIOS interfaces require network addresses. This article presents a
	step-by-step example on how to use Netbios API call to get the network adapter
	addresses from Microsoft Visual Basic.
	
	MORE INFORMATION
	================
	
	Step-by-Step Example
	--------------------
	
	1. Create a new Standard EXE from Visual Basic. Form1 is created by default.
	
	2. Add a CommandButton to Form1. Its default name is Command1.
	
	3. Add the following code to the General Declarations section of Form1:
	
	     Option Explicit
	
	     Private Const NCBASTAT = &H33
	     Private Const NCBNAMSZ = 16
	     Private Const HEAP_ZERO_MEMORY = &H8
	     Private Const HEAP_GENERATE_EXCEPTIONS = &H4
	     Private Const NCBRESET = &H32
	
	     Private Type NCB
	          ncb_command As Byte 'Integer
	          ncb_retcode As Byte 'Integer
	          ncb_lsn As Byte 'Integer
	          ncb_num As Byte ' Integer
	          ncb_buffer As Long 'String
	          ncb_length As Integer
	          ncb_callname As String * NCBNAMSZ
	          ncb_name As String * NCBNAMSZ
	          ncb_rto As Byte 'Integer
	          ncb_sto As Byte ' Integer
	          ncb_post As Long
	          ncb_lana_num As Byte 'Integer
	          ncb_cmd_cplt As Byte  'Integer
	          ncb_reserve(9) As Byte ' Reserved, must be 0
	          ncb_event As Long
	     End Type
	     Private Type ADAPTER_STATUS
	          adapter_address(5) As Byte 'As String * 6
	          rev_major As Byte 'Integer
	          reserved0 As Byte 'Integer
	          adapter_type As Byte 'Integer
	          rev_minor As Byte 'Integer
	          duration As Integer
	          frmr_recv As Integer
	          frmr_xmit As Integer
	          iframe_recv_err As Integer
	          xmit_aborts As Integer
	          xmit_success As Long
	          recv_success As Long
	          iframe_xmit_err As Integer
	          recv_buff_unavail As Integer
	          t1_timeouts As Integer
	          ti_timeouts As Integer
	          Reserved1 As Long
	          free_ncbs As Integer
	          max_cfg_ncbs As Integer
	          max_ncbs As Integer
	          xmit_buf_unavail As Integer
	          max_dgram_size As Integer
	          pending_sess As Integer
	          max_cfg_sess As Integer
	          max_sess As Integer
	          max_sess_pkt_size As Integer
	          name_count As Integer
	     End Type
	     Private Type NAME_BUFFER
	          name  As String * NCBNAMSZ
	          name_num As Integer
	          name_flags As Integer
	     End Type
	     Private Type ASTAT
	          adapt As ADAPTER_STATUS
	          NameBuff(30) As NAME_BUFFER
	     End Type
	
	     Private Declare Function Netbios Lib "netapi32.dll" _
	             (pncb As NCB) As Byte
	     Private Declare Sub CopyMemory Lib "kernel32" Alias "RtlMoveMemory" ( _
	             hpvDest As Any, ByVal hpvSource As Long, ByVal cbCopy As Long)
	     Private Declare Function GetProcessHeap Lib "kernel32" () As Long
	     Private Declare Function HeapAlloc Lib "kernel32" _
	             (ByVal hHeap As Long, ByVal dwFlags As Long, _
	             ByVal dwBytes As Long) As Long
	     Private Declare Function HeapFree Lib "kernel32" (ByVal hHeap As Long, _
	             ByVal dwFlags As Long, lpMem As Any) As Long
	
	4. Add the following code to Command1_Click event procedure:
	
	     Sub Command1_Click()
	         Dim myNcb As NCB
	         Dim bRet As Byte
	         myNcb.ncb_command = NCBRESET
	         bRet = Netbios(myNcb)
	
	         myNcb.ncb_command = NCBASTAT
	         myNcb.ncb_lana_num = 0
	         myNcb.ncb_callname = "*               "
	
	         Dim myASTAT As ASTAT, tempASTAT As ASTAT
	         Dim pASTAT As Long
	         myNcb.ncb_length = Len(myASTAT)
	         Debug.Print Err.LastDllError
	         pASTAT = HeapAlloc(GetProcessHeap(), HEAP_GENERATE_EXCEPTIONS _
	                  Or HEAP_ZERO_MEMORY, myNcb.ncb_length)
	         If pASTAT = 0 Then
	            Debug.Print "memory allcoation failed!"
	            Exit Sub
	         End If
	         myNcb.ncb_buffer = pASTAT
	         bRet = Netbios(myNcb)
	         Debug.Print Err.LastDllError
	         CopyMemory myASTAT, myNcb.ncb_buffer, Len(myASTAT)
	         MsgBox Hex(myASTAT.adapt.adapter_address(0)) & " " & _
	                Hex(myASTAT.adapt.adapter_address(1)) _
	                & " " & Hex(myASTAT.adapt.adapter_address(2)) & " " _
	                & Hex(myASTAT.adapt.adapter_address(3)) _
	                & " " & Hex(myASTAT.adapt.adapter_address(4)) & " " _
	                & Hex(myASTAT.adapt.adapter_address(5))
	         HeapFree GetProcessHeap(), 0, pASTAT
	     End Sub
	
	5. Press the F5 key to run the program.
	
	6. Click on Command1. Note that the network adapter address is displayed in a
	  message box.
	
	Additional query words: KBINetDev VKBWinAPI kbdsi kbDSupport kbVBp kbVBp400 kbVBp500 kbVBp600
	
	======================================================================
	Keywords          : kbnetwork kbAPI kbNetBIOS kbSDKPlatform kbGrpDSNet 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
