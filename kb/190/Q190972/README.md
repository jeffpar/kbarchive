---
layout: page
title: "Q190972: NotesDem.exe Reads and Writes the Contacts NOTES Field"
permalink: /kb/190/Q190972/
---

## Q190972: NotesDem.exe Reads and Writes the Contacts NOTES Field

{% raw %}

	Article: Q190972
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbfile kbSample kbMFC kbVC500 kbVC600 kbOSWinCE100 kbOSWinCE200 kbGrpDSMFCATL
	Last Modified: 26-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	NotesDem.exe is an MFC sample for Windows CE that demonstrates how to read and
	write the NOTES field of the Contacts Database using the RichInk control. The
	NOTES field in the Contacts application is not the same field as HHPR_NOTES used
	in the address card structure. Actually, it is not even part of the addresscard
	structure so you must use the Windows CE Database APIs to get access to it.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	NotesDem.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. After it is posted, the file is housed on
	secure servers that prevent any unauthorized changes to the file.
	
	The property ID of the NOTES field is 0x170041. It contains binary data in the
	RichInk control format. There is an article "\Windows CE Platform
	SDK\Support\RichInk\RichInk.doc" that describes how to use the RichInk control.
	
	Reading the NOTES field is not very difficult. The following code taken from
	NotesDemo.exe shows how you could read the field into a RichInk control:
	
	     HANDLE h_contact;
	     CEPROPVAL* propval;
	     WORD  propsrecv = 1;
	     CEPROPID ceprops[] = {0x170041};
	     DWORD buflen = 0;
	     PEGOID id = GetAddressCardOid(m_CardIndex);
	     DWORD index;
	
	     h_contact=CeOpenDatabase(&contactsid,_T("Contacts Database"),0,0,NULL);
	     CeSeekDatabase(h_contact,CEDB_SEEK_CEOID,id,&index);
	
	     if(!CeReadRecordProps(h_contact,CEDB_ALLOWREALLOC,&propsrecv,
	                           ceprops,(unsigne d char**)&propval,&buflen))
	     {
	        MessageBox(_T(" Failed to read data! "));
	     }
	
	     ::SendMessage(m_hRichInkCtrl,IM_CLEARALL,0,0);
	     ::SendMessage(m_hRichInkCtrl,IM_SETDATA,
	                   (WPARAM)propval->val.blob.dwCount,
	                   (LPARAM)propval->val.blob.lpb);
	     CloseHandle(h_contact);
	
	The NotesDem.exe sample also demonstrates how to write to the NOTES field.
	
	NOTE: RichInk.h includes the calerror.h file. This file was not distributed with
	the Windows CE Toolkit for Visual C++ 5.0. This include can be commented out for
	the build. This control does not exist for the x86 emulation mode.
	
	REFERENCES
	==========
	
	Windows CE Programmers Guide: Accessing Persistent Storage
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbSample kbMFC kbVC500 kbVC600 kbOSWinCE100 kbOSWinCE200 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : :5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
