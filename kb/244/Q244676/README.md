---
layout: page
title: "Q244676: HOWTO: Map, Delete, Enumerate Network Drives w/Scripting Host"
permalink: /kb/244/Q244676/
---

## Q244676: HOWTO: Map, Delete, Enumerate Network Drives w/Scripting Host

{% raw %}

	Article: Q244676
	Product(s): Microsoft FoxPro
	Version(s): 3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbMiscTools kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbWSH kbGrpDSFox kbDSupport
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Windows Script Host is a language-independent scripting host for
	32-bit Windows operating system platforms. Windows Script Host is integrated
	into Microsoft Windows 98, Microsoft Windows 2000, and Microsoft Internet
	Information Server 4.0. It is included with Microsoft Windows NT 4 Option Pack
	and is also available for download at:
	
	http://msdn.microsoft.com/scripting.
	
	MORE INFORMATION
	================
	
	This program demonstrates how to map a network drive and then enumerate through
	the mapped drives. The program deletes a mapped drive if it exists. To run this
	example, copy the code below into a new program file, change the third #DEFINE
	to a valid network share on your network, and then run the program.
	
	  #DEFINE CRLF	       CHR(13)+CHR(10)
	  #DEFINE TAB	       CHR(9)
	  #DEFINE lcNetworkShare   '\\Servr\Share'
	
	  ON ERROR DO errorhandler WITH ERROR(),LINENO(),MESSAGE()
	  LOCAL  colDrives, strMsg
	  PRIVATE strDrive,strShare,WSHNetwork
	  WSHNetwork = CREATEOBJECT("WScript.Network")
	  colDrives = WSHNetwork.EnumNetworkDrives
	  strMsg = ''
	
	  IF colDrives.COUNT > 0
	      FOR i = 0 TO colDrives.COUNT - 1 STEP 2
	  *!* Windows 2000 adds "Network Places" to list
	          IF !EMPTY(colDrives.ITEM[i])  && drive letter is mapped
	              strMsg = strMsg + CRLF + colDrives.ITEM[i] + TAB + colDrives.ITEM[i + 1]
	          ENDIF
	      ENDFOR
	      =MESSAGEBOX(strMsg)
	  ENDIF
	
	  strDrive = 'Z:'
	  strShare = lcNetworkShare
	  *!*	Note:  If drive letter is already mapped, or cannot find the path, it will throw first error
	  WSHNetwork.MapNetworkDrive( strDrive, strShare)
	  *!*  There are 3 other parameters that are Optional- bUpdateProfile,strUser,strPassword
	  *!*  bUpdateProfile-Update the user profile
	  *!*  strUser and strPassword-If you need credentials of another user for the share, specify strUser and StrPassword
	
	  PROCEDURE errorhandler
	      LPARAMETERS nError, nLine, cmessage
	      IF nError=1429  &&error mapping drive?
	          DO CASE
	              CASE "network path was not found" $ cmessage  &&common error so handle it if you want
	                  MESSAGEBOX( "Network path not found" )
	              CASE "local device name is already in use" $ cmessage  &&common error so handle it if you want
	                  MESSAGEBOX( "Local device name is already in use - I am going to delete it!" )
	                  lforce = .T.  && force removal even if resource is in use
	                  lupdateprofile = .T.  && Update the profile
	                  WSHNetwork.RemoveNetworkDrive(strDrive,lforce,lupdateprofile)
	              OTHERWISE
	                  MESSAGEBOX(MESSAGE())
	          ENDCASE
	      ENDIF
	
	REFERENCES
	==========
	
	For the latest information on the Windows Script Host, see the following page on
	the Microsoft Technical Support site:
	
	http://msdn.microsoft.com/scripting
	
	Additional query words:
	
	======================================================================
	Keywords          : kbMiscTools kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbWSH kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : :3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
