---
layout: page
title: "Q223025: HOWTO: Call GetNetworkParams/GetAdaptersInfo From Visual Basic"
permalink: /kb/223/Q223025/
---

## Q223025: HOWTO: Call GetNetworkParams/GetAdaptersInfo From Visual Basic

	Article: Q223025
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2000,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbAPI kbOSWin2000 kbVBp kbVBp400 kbVBp500 kbVBp600 kbVS600 kbOSWin98 kbIPHelp kbGrpDSVB
	Last Modified: 09-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 6.0, 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 6.0, 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 6.0, 5.0 
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Windows 98 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows Millennium Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article illustrates how to programmatically retrieve IP configuration
	information similar to the IPCONFIG.EXE utility. It demonstrates how to use the
	IP Helper APIs GetNetworkParams() and GetAdaptersInfo() from Visual Basic.
	
	The libraries called by the code sample in this article are only supported on the
	following platforms:
	
	  Microsoft Windows 2000
	  Microsoft Windows 98
	  Microsoft Windows Millennium Edition (Me)
	
	Running it on any other platform results in an error.
	
	MORE INFORMATION
	================
	
	1. Start a new Visual Basic Standard EXE project. Form1 is created by default.
	
	2. On the Project menu, click Remove Form1.
	
	3. On the Project menu, click Add Module. Module1 is created by default.
	
	4. Paste the following code in the General Declarations section of Module1:
	
	  Public Const MAX_HOSTNAME_LEN = 132
	  Public Const MAX_DOMAIN_NAME_LEN = 132
	  Public Const MAX_SCOPE_ID_LEN = 260
	  Public Const MAX_ADAPTER_NAME_LENGTH = 260
	  Public Const MAX_ADAPTER_ADDRESS_LENGTH = 8
	  Public Const MAX_ADAPTER_DESCRIPTION_LENGTH = 132
	  Public Const ERROR_BUFFER_OVERFLOW = 111
	  Public Const MIB_IF_TYPE_ETHERNET = 6
	  Public Const MIB_IF_TYPE_TOKENRING = 9
	  Public Const MIB_IF_TYPE_FDDI = 15
	  Public Const MIB_IF_TYPE_PPP = 23
	  Public Const MIB_IF_TYPE_LOOPBACK = 24
	  Public Const MIB_IF_TYPE_SLIP = 28
	
	  Type IP_ADDR_STRING
	              Next As Long
	              IpAddress As String * 16
	              IpMask As String * 16
	              Context As Long
	  End Type
	
	  Type IP_ADAPTER_INFO
	              Next As Long
	              ComboIndex As Long
	              AdapterName As String * MAX_ADAPTER_NAME_LENGTH
	              Description As String * MAX_ADAPTER_DESCRIPTION_LENGTH
	              AddressLength As Long
	              Address(MAX_ADAPTER_ADDRESS_LENGTH - 1) As Byte
	              Index As Long
	              Type As Long
	              DhcpEnabled As Long
	              CurrentIpAddress As Long
	              IpAddressList As IP_ADDR_STRING
	              GatewayList As IP_ADDR_STRING
	              DhcpServer As IP_ADDR_STRING
	              HaveWins As Byte
	              PrimaryWinsServer As IP_ADDR_STRING
	              SecondaryWinsServer As IP_ADDR_STRING
	              LeaseObtained As Long
	              LeaseExpires As Long
	  End Type
	
	  Type FIXED_INFO
	              HostName As String * MAX_HOSTNAME_LEN
	              DomainName As String * MAX_DOMAIN_NAME_LEN
	              CurrentDnsServer As Long
	              DnsServerList As IP_ADDR_STRING
	              NodeType As Long
	              ScopeId  As String * MAX_SCOPE_ID_LEN
	              EnableRouting As Long
	              EnableProxy As Long
	              EnableDns As Long
	  End Type
	
	  Public Declare Function GetNetworkParams Lib "IPHlpApi.dll" _
	         (FixedInfo As Any, pOutBufLen As Long) As Long
	  Public Declare Function GetAdaptersInfo Lib "IPHlpApi.dll" _
	         (IpAdapterInfo As Any, pOutBufLen As Long) As Long
	  Public Declare Sub CopyMemory Lib "kernel32" Alias "RtlMoveMemory" _
	         (Destination As Any, Source As Any, ByVal Length As Long)
	
	  Sub main()
	      Dim error As Long
	      Dim FixedInfoSize As Long
	      Dim AdapterInfoSize As Long
	      Dim i As Integer
	      Dim PhysicalAddress  As String
	      Dim NewTime As Date
	      Dim AdapterInfo As IP_ADAPTER_INFO
	      Dim AddrStr As IP_ADDR_STRING
	      Dim FixedInfo As FIXED_INFO
	      Dim Buffer As IP_ADDR_STRING
	      Dim pAddrStr As Long
	      Dim pAdapt As Long
	      Dim Buffer2 As IP_ADAPTER_INFO
	      Dim FixedInfoBuffer() As Byte
	      Dim AdapterInfoBuffer() As Byte
	      
	      ' Get the main IP configuration information for this machine
	      ' using a FIXED_INFO structure.
	      FixedInfoSize = 0
	      error = GetNetworkParams(ByVal 0&, FixedInfoSize)
	      If error <> 0 Then
	          If error <> ERROR_BUFFER_OVERFLOW Then
	             MsgBox "GetNetworkParams sizing failed with error " & error
	             Exit Sub
	          End If
	      End If
	      ReDim FixedInfoBuffer(FixedInfoSize - 1)
	      
	      error = GetNetworkParams(FixedInfoBuffer(0), FixedInfoSize)
	      If error = 0 Then
	              CopyMemory FixedInfo, FixedInfoBuffer(0), FixedInfoSize
	              MsgBox "Host Name:  " & FixedInfo.HostName
	              MsgBox "DNS Servers:  " & FixedInfo.DnsServerList.IpAddress
	              pAddrStr = FixedInfo.DnsServerList.Next
	              Do While pAddrStr <> 0
	                    CopyMemory Buffer, ByVal pAddrStr, LenB(Buffer)
	                    MsgBox "DNS Servers:  " & Buffer.IpAddress
	                    pAddrStr = Buffer.Next
	              Loop
	              
	              Select Case FixedInfo.NodeType
	                         Case 1
	                                    MsgBox "Node type: Broadcast"
	                         Case 2
	                                    MsgBox "Node type: Peer to peer"
	                         Case 4
	                                    MsgBox "Node type: Mixed"
	                         Case 8
	                                    MsgBox "Node type: Hybrid"
	                         Case Else
	                                    MsgBox "Unknown node type"
	              End Select
	              
	              MsgBox "NetBIOS Scope ID:  " & FixedInfo.ScopeId
	              If FixedInfo.EnableRouting Then
	                         MsgBox "IP Routing Enabled "
	              Else
	                         MsgBox "IP Routing not enabled"
	              End If
	              If FixedInfo.EnableProxy Then
	                         MsgBox "WINS Proxy Enabled "
	              Else
	                         MsgBox "WINS Proxy not Enabled "
	              End If
	              If FixedInfo.EnableDns Then
	                        MsgBox "NetBIOS Resolution Uses DNS "
	              Else
	                        MsgBox "NetBIOS Resolution Does not use DNS  "
	              End If
	      Else
	              MsgBox "GetNetworkParams failed with error " & error
	              Exit Sub
	      End If
	      
	      ' Enumerate all of the adapter specific information using the
	      ' IP_ADAPTER_INFO structure.
	      ' Note:  IP_ADAPTER_INFO contains a linked list of adapter entries.
	      
	      AdapterInfoSize = 0
	      error = GetAdaptersInfo(ByVal 0&, AdapterInfoSize)
	      If error <> 0 Then
	          If error <> ERROR_BUFFER_OVERFLOW Then
	             MsgBox "GetAdaptersInfo sizing failed with error " & error
	             Exit Sub
	          End If
	      End If
	      ReDim AdapterInfoBuffer(AdapterInfoSize - 1)
	
	      ' Get actual adapter information
	      error = GetAdaptersInfo(AdapterInfoBuffer(0), AdapterInfoSize)
	      If error <> 0 Then
	         MsgBox "GetAdaptersInfo failed with error " & error
	         Exit Sub
	      End If
	     
	      ' Allocate memory
	       CopyMemory AdapterInfo, AdapterInfoBuffer(0), AdapterInfoSize
	      pAdapt = AdapterInfo.Next
	
	      Do
	       CopyMemory Buffer2, AdapterInfo, AdapterInfoSize
	         Select Case Buffer2.Type
	                Case MIB_IF_TYPE_ETHERNET
	                     MsgBox "Adapter name: Ethernet adapter "
	                Case MIB_IF_TYPE_TOKENRING
	                     MsgBox "Adapter name: Token Ring adapter "
	                Case MIB_IF_TYPE_FDDI
	                     MsgBox "Adapter name: FDDI adapter "
	                Case MIB_IF_TYPE_PPP
	                     MsgBox "Adapter name: PPP adapter"
	                Case MIB_IF_TYPE_LOOPBACK
	                     MsgBox "Adapter name: Loopback adapter "
	                Case MIB_IF_TYPE_SLIP
	                     MsgBox "Adapter name: Slip adapter "
	                Case Else
	                     MsgBox "Adapter name: Other adapter "
	         End Select
	         MsgBox "AdapterDescription: " & Buffer2.Description
	
	         PhysicalAddress = ""
	         For i = 0 To Buffer2.AddressLength - 1
	             PhysicalAddress = PhysicalAddress & Hex(Buffer2.Address(i))
	             If i < Buffer2.AddressLength - 1 Then
	                PhysicalAddress = PhysicalAddress & "-"
	             End If
	         Next
	         MsgBox "Physical Address: " & PhysicalAddress
	      
	         If Buffer2.DhcpEnabled Then
	            MsgBox "DHCP Enabled "
	         Else
	            MsgBox "DHCP disabled"
	         End If
	
	         MsgBox "IP Address: " & Buffer2.IpAddressList.IpAddress
	         MsgBox "Subnet Mask: " & Buffer2.IpAddressList.IpMask
	         pAddrStr = Buffer2.IpAddressList.Next
	         Do While pAddrStr <> 0
	            CopyMemory Buffer, Buffer2.IpAddressList, LenB(Buffer)
	            MsgBox "IP Address: " & Buffer.IpAddress
	            MsgBox "Subnet Mask: " & Buffer.IpMask
	            pAddrStr = Buffer.Next
	            If pAddrStr <> 0 Then
	               CopyMemory Buffer2.IpAddressList, ByVal pAddrStr, _
	                          LenB(Buffer2.IpAddressList)
	            End If
	         Loop
	      
	         MsgBox "Default Gateway: " & Buffer2.GatewayList.IpAddress
	         pAddrStr = Buffer2.GatewayList.Next
	         Do While pAddrStr <> 0
	            CopyMemory Buffer, Buffer2.GatewayList, LenB(Buffer)
	            MsgBox "IP Address: " & Buffer.IpAddress
	            pAddrStr = Buffer.Next
	            If pAddrStr <> 0 Then
	               CopyMemory Buffer2.GatewayList, ByVal pAddrStr, _
	                          LenB(Buffer2.GatewayList)
	            End If
	         Loop
	
	         MsgBox "DHCP Server: " & Buffer2.DhcpServer.IpAddress
	         MsgBox "Primary WINS Server: " & _
	                Buffer2.PrimaryWinsServer.IpAddress
	         MsgBox "Secondary WINS Server: " & _
	                Buffer2.SecondaryWinsServer.IpAddress
	
	         ' Display time.
	         NewTime = DateAdd("s", Buffer2.LeaseObtained, #1/1/1970#)
	         MsgBox "Lease Obtained: " & _
	                CStr(Format(NewTime, "dddd, mmm d hh:mm:ss yyyy"))
	       
	         NewTime = DateAdd("s", Buffer2.LeaseExpires, #1/1/1970#)
	         MsgBox "Lease Expires :  " & _
	                CStr(Format(NewTime, "dddd, mmm d hh:mm:ss yyyy"))
	         pAdapt = Buffer2.Next
	         If pAdapt <> 0 Then
	             CopyMemory AdapterInfo, ByVal pAdapt, AdapterInfoSize
	          End If
	        Loop Until pAdapt = 0
	  End Sub
	
	5. Press the F5 key to run the project, click OK on each of the message boxes
	  that are displayed, and note the results.
	
	Running this sample as compiled, EXE gives the following error message at the
	end:
	
	  Runtime error 10: this array is fixed and temporary locked.
	
	Running this inside IDE generates IPF at VB6.EXE at the end.
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by May Ji, Microsoft Corporation
	
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  QQ193059 INFO: IP Helper APIs Add Net Config and Stat Info to Win32 Apps
	
	  QQ234573 BUG:IPHelper API Do Not Work Correctly After Install IE 5.0 on
	  Windows 98
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAPI kbOSWin2000 kbVBp kbVBp400 kbVBp500 kbVBp600 kbVS600 kbOSWin98 kbIPHelp kbGrpDSVB kbGrpDSNet 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinMEsearch kbVBSearch kbAudDeveloper kbWin98search kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVB500 kbVB600 kbVB400Search kbVB400 kbWinAdvServSearch kbZNotKeyword3 kbWin98 kbWinME
	Version           : :2000,4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
