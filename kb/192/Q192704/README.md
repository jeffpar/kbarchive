---
layout: page
title: "Q192704: PRB: CArchive::Read Might Hang When Using CSocketFile"
permalink: /kb/192/Q192704/
---

## Q192704: PRB: CArchive::Read Might Hang When Using CSocketFile

{% raw %}

	Article: Q192704
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.1,2.2,4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbFileIO kbMFC kbVC kbVC210 kbVC220 kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 kbWinsock k
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.1, 2.2, 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When reading data that uses CArchive::Read and the file is a CSocketFile,
	certain buffer sizes and data sizes are more likely to cause a hang in
	CSocket::Receive at the end of transmission when the transmission isn't closed.
	
	CAUSE
	=====
	
	CArchive sometimes tries to maintain data in its buffer even if all of the data
	requested has been read. This causes an extra CSocketFile::Read call when no
	data is available on the socket file. The Read call hangs until more data
	appears or until the socket connection is closed.
	
	RESOLUTION
	==========
	
	The underlying socket of the socket file should be closed at the end of
	transmitting the data.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	CArchive provides a buffered mechanism to read data from a file, which can be
	based on CSocketFile as well as CFile. The algorithm for CArchive::Read is
	implemented so that an extra call to a CFile derived class (for example,
	CSocketFile) Read function is made even if all of the needed data is present.
	For disk-based files, this presents no problem because EOF is reached and the
	call to Read returns immediately. For CsocketFile-based files, either the socket
	must be closed or more data needs to be sent for the Read call to return.
	
	The hang is more likely to occur if the transmitted data size is a multiple of
	the buffer size (4k) because the last byte needed is more likely to be the last
	byte in the current buffer. This results in an empty buffer and causes another
	Read operation even though there is no more data to be read.
	
	Normally, if the required data to be read is less than the buffer size, the Read
	operation returns with less than the requested size (the buffer size), however
	in this case, it does not cause CArchive to replenish its buffer.
	
	The proper way to avoid this situation is to close the socket connection.
	
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by Adam Kim,
	Microsoft Corporation.
	
	
	Additional query words: Write hangs CAsyncSocket
	
	======================================================================
	Keywords          : kbFileIO kbMFC kbVC kbVC210 kbVC220 kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 kbWinsock kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:2.1,2.2,4.0,4.1,4.2,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
