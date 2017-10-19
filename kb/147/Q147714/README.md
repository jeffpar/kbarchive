---
layout: page
title: "Q147714: Windows Sockets 2 Service Provider Interface Limitations"
permalink: /kb/147/Q147714/
---

## Q147714: Windows Sockets 2 Service Provider Interface Limitations

	Article: Q147714
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 14-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Windows Sockets 2 Service Provider Interface (Revision 2.1.0) provides
	specifications for transport network programming under Windows. This interface
	is the most comprehensive open transport API designed to date. However, few
	limitations exist. The purpose of this article is to list and describe the
	limitation items of the specifications and provide alternative solutions to work
	around the limitation items. The information below is contributed by the Windows
	Sockets Vendor Community.
	
	MORE INFORMATION
	================
	
	1. Calling connect() on a non-blocking socket, getting WSAEWOULDBLOCK, then
	  immediately calling recv() and expecting WSAEWOULDBLOCK before the connection
	  has been established.
	
	  Reason: This assumes that the connection will never be established by the time
	  the application calls recv().
	
	  Workaround: An application using a non-blocking socket must handle the
	  WSAEWOULDBLOCK error value, but must not depend on occurrence of the error.
	
	2. Calling select() with three empty FD_SETs and a valid TIMEOUT structure as a
	  delay function.
	
	  Reason: The select() function is intended as a network function, not a general
	  purpose timer.
	
	  Workaround: Use a legitimate system timer service.
	
	3. Polling with connect() on a non-blocking socket to determine when the
	  connection has been established.
	
	  Reason: The WinSock 1.1 specification does not define an error for connect()
	  when a non-blocking connection is pending. Therefore, the error value
	  returned varies.
	
	  Workaround: Use asynchronous notification of connection completion An
	  application that prefers synchronous operation mode can use the select()
	  function (please see item 21 below).
	
	
	4. Assuming socket handles are always less than 16.
	
	  Reason: The only invalid socket handle value is defined by the WinSock.H file
	  as INVALID_SOCKET. Any other value the SOCKET type can handle is fair game,
	  and an application must handle it. Socket handles are not transparent.
	  Therefore, applications should not depend on specific values.
	
	  Workaround: Expect a socket handle of any value, including 0. Do not expect
	  socket handle values to change with each successive call to socket() or
	  WSASocket(). Socket handles may be re-used by the WinSock implementation.
	
	5. Polling with select() and a zero timeout in Win16's non-preemptive
	  environment.
	
	  Reason: With any non-zero timeout, select() calls the current blocking hook
	  function, so that an application anticipating an event yields to other
	  processes executing in a 16-bit Windows environment. However, with a zero
	  time-out, an application does not yield to other processes, and may not allow
	  network operations to occur (it will loop continuously).
	
	  Workaround: Use a small non-zero timeout, or use asynchronous notification
	  instead of using select().
	
	6. Calling WSAAsyncSelect() with a zero Event mask in order to make the socket
	  non-blocking.
	
	  Reason: WSAAsyncSelect() is designed to allow an application to register for
	  asynchronous notification of network events. The WinSock version 1.1
	  specification does not specify an error for a zero event mask, but may
	  interpret it as an invalid input argument (so it may fail with WSAEINVAL) or
	  ignore the request.
	
	  Workaround: To make a socket non-blocking without registering for asynchronous
	  notification, use ioctlsocket() FIONBIO.
	
	7. Telnet applications that neither enable OOBINLINE, nor read OOB data.
	
	  Reason and Workaround not available.
	
	8. Assuming zero (0) is an invalid socket handle value.
	
	  Reason and Workaround: Please see item 4 above.
	
	9. Applications that do not properly shut-down when the user closes the main
	  window while a blocking API is running.
	
	  Reason: WinSock applications that do not close sockets and call WSACleanup()
	  does not allow a WinSock implementation to re-claim resources used by the
	  application. Resource leakage can eventually result in resource shortage for
	  all other WinSock applications (for example: network system failure).
	
	  Workaround: While a blocking API is running, do the following to abort:
	
	  a. Call WSACancelBlockingCall().
	
	  b. Wait until the pending function returns. If it is cancelled before the
	     operation completes, the pending function fails with the WSAEINTR error.
	     However, applications must also be prepared for success due to the race
	     condition involved with cancellation.
	
	  c. Close this socket and all other sockets.
	
	     NOTE: The proper closure of a connected stream socket involves the
	     following:
	
	      - Call shutdown() how=1
	
	      - Loop on recv() until it returns 0 or fails with any error
	
	      - Call closesocket().
	
	  d. Call WSACleanup().
	
	10. Out of band data.
	
	  Reason: TCP does not do Out of Band (OOB) data reliably. In addition, there
	  are incompatible differences in the implementation at the protocol level (in
	  the urgent pointer offset). Berkeley Software Distribution's (BSD)
	  implementation performs RFC 793. Many others implement the corrected RFC
	  1122 version. One version cannot point to the OOB data of the other
	  version.
	
	  Workaround: Use a separate socket for urgent data. Some protocols require it
	  (please see item 7 above).
	
	11. Calling strlen() on a hostent structure's IP address, then truncating it to
	  four bytes, thereby overwriting part of the malloc() heap header.
	
	  Reason and Workaround not available.
	
	12. Polling with recv(MSG_PEEK) to determine when a complete message has
	  arrived.
	
	  Reason and Workaround not available.
	
	13. Bounding every set of operations with calls to WSAStartup() and
	  WSACleanup().
	
	  Reason: This is possible as long as each WSAStartup() has a matching call to
	  WSACleanup(), but requires more work.
	
	  Workaround: In a DLL, custom control or class library, it is possible to
	  register the calling client based on a unique task handle or process ID.
	  This allows automatic registration without duplication. Automatic
	  de-registration can occur when a process closes its last socket. You may
	  also use the process notification mechanisms available in the 32- bit
	  environment.
	
	14. Ignoring API errors.
	
	  Reason: When a function fails, the error value returned by WSAGetLastError()
	  (or included in an asynchronous message) informs you why it has failed.
	  Based on the function that fails and the socket state, you can determine why
	  the function fails and what you can do.
	
	  Workaround: Check for error values, and write your applications to anticipate
	  them. When a fatal error occurs, display an error message that shows the
	  following:
	
	   - The function that has failed
	
	   - The WinSock error number and macro
	
	   - A short description of the error definition
	
	   - Workarounds
	
	15. Installing an empty blocking hook that returns FALSE.
	
	  Reason: One of the primary purposes of the blocking hook function is to
	  provide a mechanism for an application with a pending blocking operation to
	  yield. By returning FALSE from the blocking hook function, you defeat this
	  purpose and your application prevents multitasking in the non-preemptive
	  16-bit Windows environment. This also prevents some WinSock implementations
	  from completing the pending network operation.
	
	  Workaround: Sub-class the active window. This prevents re-entrant messages.
	
	16. Client applications that bind to a specific port.
	
	  Reason: Client applications actively initiate a network communication. Server
	  applications passively wait for communication. A server must bind() to a
	  specific port which is known to clients that need to use the service.
	  However, a client does not need to bind() its socket to a specific port to
	  communicate with a server.
	
	
	  Workaround: Let the WinSock implementation assign the local port number
	  implicitly when you call connect() (on stream or datagram sockets) or
	  sendto() (on datagram sockets).
	
	17. Nagle challenged applications.
	
	  Reason: The Nagle algorithm reduces trivial network traffic. The algorithm
	  recommends that you do not send a TCP segment until:
	
	  - All outstanding TCP segments have been acknowledged
	
	  -or-
	
	  - There is a full TCP segment ready to send.
	
	  A "Nagle challenged application" is one that cannot wait until either of
	  these conditions occurs. However, it has time-critical data that it must
	  send continuously. This results in unwanted network traffic.
	
	  Workaround: Do not write applications that depend on the immediate data echo
	  from the remote TCP host.
	
	18. Assuming stream sockets maintain message frame boundaries.
	
	  Reason: Stream sockets (TCP) provide data streams. The largest message length
	  an application can depend on is one-byte in length. This means that with any
	  call to send() or recv(), the WinSock implementation may transfer any number
	  of bytes less than the buffer length specified.
	
	  Workaround: Whether you use a blocking or non-blocking socket, compare the
	  return from send() or recv() with the expected value. If the value is less
	  than the expected value, adjust the buffer length and pointer for another
	  function call (which may occur asynchronously, if you use asynchronous
	  operation mode).
	
	19. 16-bit DLL's that call WSACleanup() from their WEP.
	
	  Reason: 16-bit Windows does not guarantee that WEP() is called and the
	  Windows subsystem has been in frequent dis-array.
	
	  Workaround: Do not use WEP().
	
	20. Single-byte send() and recv().
	
	  Reason: Couple one-byte sends with Nagle disabled.
	
	
	  Workaround: Send modest amounts and receive as much as possible.
	
	
	21. Select().
	
	  Reason: Consider the steps involved in using select(). You must use the
	  macros to clear the three fdsets, then set the appropriate fdsets for each
	  socket, then set the timer, and then call select().
	
	
	  Workaround: Use asynchronous operation mode.
	
	22. Applications that call gethostbyname() before calling inet_addr().
	
	  Reason: Some users prefer to use network addresses rather than host names.
	  The WinSock version 1.1 specification does not specify what gethostbyname()
	  should do with an IP address in standard ASCII dotted IP notation. As a
	  result, the outcome is unpredictable. It may succeed and do a
	  reverse-lookup, or it may fail.
	
	  Workaround: With any destination input by a user (which may be a host name or
	  dotted IP address), call inet_addr() first to check for an IP address, and
	  if that fails, call gethostbyname() to try to resolve it.
	
	  Furthermore, in some applications, you may want to explicitly check the input
	  string for the broadcast address "255.255.255.255," because the return value
	  from inet_addr() for this address is the same as SOCKET_ERROR.
	
	23. Win32 applications that install blocking hooks.
	
	  Reason: Aside from yielding to other applications (please see item 15 above),
	  blocking hook functions are designed to allow concurrent processing within a
	  task, while there is a blocking operation pending. In Win32, there are
	  threads.
	
	  Workaround: Use threads.
	
	24. Polling with ioctlsocket(FIONREAD) on a stream socket until a complete
	  "message" appears.
	
	  Reason: A stream socket (TCP) does not preserve message boundaries (please
	  see item 18 above). An application that uses ioctlsocket() FIONREAD or
	  recv(MSG_PEEK) to wait for a complete "message" to arrive may not succeed.
	  One reason is due to the internal WinSock system buffering. If the bytes in
	  a "message" straddle a system buffer boundary, the WinSock does not report
	  bytes that exist in other buffers.
	
	  Workaround: Do not use peek reads. Read data into your application buffers
	  and examine it there.
	
	25. Assuming that a UDP datagram of any length may be sent.
	
	  Reason: Various networks all have their limitations on maximum transmission
	  unit (MTU).
	
	  Workaround: Check for the maximum datagram size with the SO_MAX_MSGSIZE
	  socket option.
	
	26. Assuming the UDP transmissions (especially multicast transmissions) are
	  reliable.
	
	  Reason: UDP has no reliability mechanisms.
	
	  Workaround: Use TCP and keep track of your own message boundaries.
	
	27. Applications that require vendor-specific extensions, and cannot run (or
	  load) without them.
	
	  Workaround: Have a fall-back position that uses only base capabilities for
	  when the extension functions are not present.
	
	Additional query words: prodnt rfc
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51,4.0
	
	=============================================================================
	
