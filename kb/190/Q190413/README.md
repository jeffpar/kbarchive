---
layout: page
title: "Q190413: XADM: MAPI Notifications Appear to Be Dropped"
permalink: /kb/190/Q190413/
---

## Q190413: XADM: MAPI Notifications Appear to Be Dropped

	Article: Q190413
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	When registering for MAPI notifications on the Microsoft Exchange Public,
	Private, or Personal Store, the Advise OnNotify callback function does not get
	called when you think it should be.
	
	MORE INFORMATION
	================
	
	The reason you are not getting notifications can be due to one of four things:
	
	- You are registered for table notifications, and you forgot to do a
	  SetColumns() on the table.
	
	- A remote procedure call (RPC) call was not forced to the server to start the
	  notifications (use a GetProps() call on the object).
	
	- The message was sent, but you do not have a Windows message loop translating
	  and dispatching the notifications (especially with personal folder file
	  [.pst] notifications).
	
	- The INFORMATION STORE is using Fast Transfer to do the copy/move operation.
	
	  The Information Store uses a copy/move mechanism called fast transfer (also
	  referred to as a "tightly coupled store" in MAPI documentation) when it
	  detects the RPC destinations are not the same. You can see this in the
	  behavior of Advise Sinks during operations that cross store boundaries (such
	  as copying mail from your Inbox to the .pst file). With the public
	  information store, almost all operations of this type use the fast transfer
	  mechanism. This is based on the need for speed across the network (fast
	  transfer is used to minimize RPC traffic, and maximize data throughput by
	  packing certain properties, and omitting batches of properties depending on
	  the operation, the object, and the client).
	
	Background
	----------
	
	MAPI notifications are used by applications to gather data about MAPI events.
	Essentially, the application will create what is called an Advise Sink, and
	register for notifications by calling the Advise() method of the particular MAPI
	interface it is interested in.
	
	
	Several types of MAPI notifications are available:
	
	- Error notification
	
	- Extended notifications
	
	- New Mail notifications
	
	- Object notifications
	
	- Status notifications
	
	- Table notifications
	
	MAPI determines the type of notification to send based on an event mask (a
	bitmask) passed into the advise method of the interface. The following flags can
	be set:
	
	- fnevCriticalError
	
	- fnevExtended
	
	- fnevNewMail
	
	- fnevObjectCopied
	
	- fnevObjectCreated
	
	- fnevObjectDeleted
	
	- fnevObjectModified
	
	- fnevObjectMoved
	
	- fnevSearchComplete
	
	- fnevTableModified
	
	NOTE: Not all flags can be used with every Advise implementation. Check the
	documentation for specific calls.
	
	There are three different methods of building the actual Advise Sink. The first
	is fairly easy. Use a single callback function and create the Advise Sink with
	the Exchange Development Kit (EDK) function HrAllocAdviseSink(). For the
	lpvContext parameter, pass the pointer to the MAPI interface you want
	notifications on (example below).
	
	     STDAPI HrAllocAdviseSink( LPNOTIFCALLBACK lpfnCallback,
	        LPVOID lpvContext,
	        LPMAPIADVISESINK FAR * lppAdviseSink );
	
	The callback function must also be declared as in the following example:
	
	     static SCODE STDAPICALLTYPE ScNotificationHandler(LPVOID lpvContext,
	        ULONG cNotifications,
	        LPNOTIFICATION lpNotifications);
	
	The second method of creating an Advise Sink is to actually inherit from
	IMAPIAdviseSink, and handle the OnNotify member of that class.
	
	The third method is to use Microsoft Foundation Classes' (MFC) OLE interface
	maps. These must be used from within a class inheriting from CCmdTarget. The
	form for these macros looks like the following:
	
	     BEGIN_INTERFACE_PART( AdviseSink, IMAPIAdviseSink )
	        STDMETHOD_( ULONG, OnNotify ) ( ULONG, LPNOTIFICATION )
	     END_INTERFACE_PART( AdviseSink )
	
	Then implement the methods of IMAPIAdviseSink in your CCmdTarget derived class
	(AddRef, Release, QueryInterface, and OnNotify). The following example is of
	QueryInterface:
	
	     STDMETHODIMP_ CAdvise::XAdviseSink::QueryInterface(REFIID riid, void **
	     ppv)
	     {
	        METHOD_PROLOGUE(CAdvise, AdviseSink)
	        return this->ExternalQueryInterface(riid, &ppv);
	     }
	
	For more in-depth information on OLE interface maps, look in the Platform SDK.
	
	Most MAPI coding difficulties stem from the assumption that all the client code
	needs to know is the Caller section and that each new provider will work in the
	same manner as the old familiar ones. The bottom line with MAPI is to always
	read the documentation for the Implementer as well as the Caller, and to never
	assume it will always work as expected for every message store provider.
	
	As is always the case in MAPI, there are definite caveats when working with the
	Exchange Server public store as opposed to the private store (where global
	notifications do work, for instance).
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WinNT:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
