// node
// vendors
import React from 'react';
// project
import Menu from './components/menu';

import './styles.scss';

import 'milligram/dist/milligram.min.css'

const blob = '[{"task":"T1","task_label":"To Begin Your Annotation:\n\n- Draw boxes around each header cell. Click done.\n- Mark the height of **each** row in the table. Click done.\n- Name your grid to use it in future annotations. Click save template.\n\nOr, select a grid if saved from past annotation and click on the image.\n\n**Click the Help button below for more assistance.**","value":[{"x":108.06479775551462,"y":214.46857471594996,"tool":0,"frame":0,"width":53.387022167562876,"height":97.56939450596866,"details":[],"tool_label":"Grid Tool"},{"x":255.33934166603294,"y":219.99137063138213,"tool":0,"frame":0,"width":42.34143137427401,"height":92.04659859053649,"details":[],"tool_label":"Grid Tool"},{"x":190.90672870518117,"y":240.24162232130016,"tool":0,"frame":0,"width":16.568386189933307,"height":71.79634690061846,"details":[],"tool_label":"Grid Tool"},{"x":165.13368352084046,"y":240.24162232130018,"tool":0,"frame":0,"width":23.932113385459218,"height":75.4782108442399,"details":[],"tool_label":"Grid Tool"},{"x":209.31604669399593,"y":242.0825542931109,"tool":0,"frame":0,"width":22.09118158657776,"height":69.95541492880773,"details":[],"tool_label":"Grid Tool"},{"x":301.3626366380699,"y":242.0825542931109,"tool":0,"frame":0,"width":40.500499575392496,"height":69.95541492880773,"details":[],"tool_label":"Grid Tool"},{"x":347.38593161010687,"y":242.0825542931109,"tool":0,"frame":0,"width":23.932113385459218,"height":71.79634690061846,"details":[],"tool_label":"Grid Tool"},{"x":236.93002367721812,"y":245.76441823673235,"tool":0,"frame":0,"width":14.727454391051822,"height":64.43261901337553,"details":[],"tool_label":"Grid Tool"},{"x":374.999908593329,"y":245.76441823673235,"tool":0,"frame":0,"width":46.02329497203698,"height":68.114482956997,"details":[],"tool_label":"Grid Tool"},{"x":424.70506716312894,"y":245.76441823673235,"tool":0,"frame":0,"width":22.09118158657776,"height":68.114482956997,"details":[],"tool_label":"Grid Tool"},{"x":108.06479775551462,"y":310.1970372501079,"row":1,"tool":0,"frame":0,"width":53.387022167562876,"column":"a","height":33.13677549259313,"details":[],"templateID":0.2706944754517562,"tool_label":"Grid Tool"},{"x":165.13368352084046,"y":310.1970372501079,"row":1,"tool":0,"frame":0,"width":23.932113385459218,"column":"b","height":33.13677549259313,"details":[],"templateID":0.2706944754517562,"tool_label":"Grid Tool"},{"x":190.90672870518117,"y":310.1970372501079,"row":1,"tool":0,"frame":0,"width":16.568386189933307,"column":"c","height":33.13677549259313,"details":[],"templateID":0.2706944754517562,"tool_label":"Grid Tool"},{"x":209.31604669399593,"y":310.1970372501079,"row":1,"tool":0,"frame":0,"width":22.09118158657776,"column":"d","height":33.13677549259313,"details":[],"templateID":0.2706944754517562,"tool_label":"Grid Tool"},{"x":236.93002367721812,"y":310.1970372501079,"row":1,"tool":0,"frame":0,"width":14.727454391051822,"column":"e","height":33.13677549259313,"details":[],"templateID":0.2706944754517562,"tool_label":"Grid Tool"},{"x":255.33934166603294,"y":310.1970372501079,"row":1,"tool":0,"frame":0,"width":42.34143137427401,"column":"f","height":33.13677549259313,"details":[],"templateID":0.2706944754517562,"tool_label":"Grid Tool"},{"x":301.3626366380699,"y":310.1970372501079,"row":1,"tool":0,"frame":0,"width":40.500499575392496,"column":"g","height":33.13677549259313,"details":[],"templateID":0.2706944754517562,"tool_label":"Grid Tool"},{"x":347.38593161010687,"y":310.1970372501079,"row":1,"tool":0,"frame":0,"width":23.932113385459218,"column":"h","height":33.13677549259313,"details":[],"templateID":0.2706944754517562,"tool_label":"Grid Tool"},{"x":374.999908593329,"y":310.1970372501079,"row":1,"tool":0,"frame":0,"width":46.02329497203698,"column":"i","height":33.13677549259313,"details":[],"templateID":0.2706944754517562,"tool_label":"Grid Tool"},{"x":424.70506716312894,"y":310.1970372501079,"row":1,"tool":0,"frame":0,"width":22.09118158657776,"column":"j","height":33.13677549259313,"details":[],"templateID":0.2706944754517562,"tool_label":"Grid Tool"},{"x":108.06479775551462,"y":343.333812742701,"row":2,"tool":0,"frame":0,"width":53.387022167562876,"column":"a","height":11.045591830864339,"details":[],"templateID":0.9027557704203959,"tool_label":"Grid Tool"},{"x":165.13368352084046,"y":343.333812742701,"row":2,"tool":0,"frame":0,"width":23.932113385459218,"column":"b","height":11.045591830864339,"details":[],"templateID":0.9027557704203959,"tool_label":"Grid Tool"},{"x":190.90672870518117,"y":343.333812742701,"row":2,"tool":0,"frame":0,"width":16.568386189933307,"column":"c","height":11.045591830864339,"details":[],"templateID":0.9027557704203959,"tool_label":"Grid Tool"},{"x":209.31604669399593,"y":343.333812742701,"row":2,"tool":0,"frame":0,"width":22.09118158657776,"column":"d","height":11.045591830864339,"details":[],"templateID":0.9027557704203959,"tool_label":"Grid Tool"},{"x":236.93002367721812,"y":343.333812742701,"row":2,"tool":0,"frame":0,"width":14.727454391051822,"column":"e","height":11.045591830864339,"details":[],"templateID":0.9027557704203959,"tool_label":"Grid Tool"},{"x":255.33934166603294,"y":343.333812742701,"row":2,"tool":0,"frame":0,"width":42.34143137427401,"column":"f","height":11.045591830864339,"details":[],"templateID":0.9027557704203959,"tool_label":"Grid Tool"},{"x":301.3626366380699,"y":343.333812742701,"row":2,"tool":0,"frame":0,"width":40.500499575392496,"column":"g","height":11.045591830864339,"details":[],"templateID":0.9027557704203959,"tool_label":"Grid Tool"},{"x":347.38593161010687,"y":343.333812742701,"row":2,"tool":0,"frame":0,"width":23.932113385459218,"column":"h","height":11.045591830864339,"details":[],"templateID":0.9027557704203959,"tool_label":"Grid Tool"},{"x":374.999908593329,"y":343.333812742701,"row":2,"tool":0,"frame":0,"width":46.02329497203698,"column":"i","height":11.045591830864339,"details":[],"templateID":0.9027557704203959,"tool_label":"Grid Tool"},{"x":424.70506716312894,"y":343.333812742701,"row":2,"tool":0,"frame":0,"width":22.09118158657776,"column":"j","height":11.045591830864339,"details":[],"templateID":0.9027557704203959,"tool_label":"Grid Tool"},{"x":108.06479775551462,"y":354.37940457356535,"row":3,"tool":0,"frame":0,"width":53.387022167562876,"column":"a","height":14.727455774485861,"details":[],"templateID":0.47253620403414587,"tool_label":"Grid Tool"},{"x":165.13368352084046,"y":354.37940457356535,"row":3,"tool":0,"frame":0,"width":23.932113385459218,"column":"b","height":14.727455774485861,"details":[],"templateID":0.47253620403414587,"tool_label":"Grid Tool"},{"x":190.90672870518117,"y":354.37940457356535,"row":3,"tool":0,"frame":0,"width":16.568386189933307,"column":"c","height":14.727455774485861,"details":[],"templateID":0.47253620403414587,"tool_label":"Grid Tool"},{"x":209.31604669399593,"y":354.37940457356535,"row":3,"tool":0,"frame":0,"width":22.09118158657776,"column":"d","height":14.727455774485861,"details":[],"templateID":0.47253620403414587,"tool_label":"Grid Tool"},{"x":236.93002367721812,"y":354.37940457356535,"row":3,"tool":0,"frame":0,"width":14.727454391051822,"column":"e","height":14.727455774485861,"details":[],"templateID":0.47253620403414587,"tool_label":"Grid Tool"},{"x":255.33934166603294,"y":354.37940457356535,"row":3,"tool":0,"frame":0,"width":42.34143137427401,"column":"f","height":14.727455774485861,"details":[],"templateID":0.47253620403414587,"tool_label":"Grid Tool"},{"x":301.3626366380699,"y":354.37940457356535,"row":3,"tool":0,"frame":0,"width":40.500499575392496,"column":"g","height":14.727455774485861,"details":[],"templateID":0.47253620403414587,"tool_label":"Grid Tool"},{"x":347.38593161010687,"y":354.37940457356535,"row":3,"tool":0,"frame":0,"width":23.932113385459218,"column":"h","height":14.727455774485861,"details":[],"templateID":0.47253620403414587,"tool_label":"Grid Tool"},{"x":374.999908593329,"y":354.37940457356535,"row":3,"tool":0,"frame":0,"width":46.02329497203698,"column":"i","height":14.727455774485861,"details":[],"templateID":0.47253620403414587,"tool_label":"Grid Tool"},{"x":424.70506716312894,"y":354.37940457356535,"row":3,"tool":0,"frame":0,"width":22.09118158657776,"column":"j","height":14.727455774485861,"details":[],"templateID":0.47253620403414587,"tool_label":"Grid Tool"},{"x":108.06479775551462,"y":369.1068603480512,"row":4,"tool":0,"frame":0,"width":53.387022167562876,"column":"a","height":14.727455774485804,"details":[],"templateID":0.3018125193655301,"tool_label":"Grid Tool"},{"x":165.13368352084046,"y":369.1068603480512,"row":4,"tool":0,"frame":0,"width":23.932113385459218,"column":"b","height":14.727455774485804,"details":[],"templateID":0.3018125193655301,"tool_label":"Grid Tool"},{"x":190.90672870518117,"y":369.1068603480512,"row":4,"tool":0,"frame":0,"width":16.568386189933307,"column":"c","height":14.727455774485804,"details":[],"templateID":0.3018125193655301,"tool_label":"Grid Tool"},{"x":209.31604669399593,"y":369.1068603480512,"row":4,"tool":0,"frame":0,"width":22.09118158657776,"column":"d","height":14.727455774485804,"details":[],"templateID":0.3018125193655301,"tool_label":"Grid Tool"},{"x":236.93002367721812,"y":369.1068603480512,"row":4,"tool":0,"frame":0,"width":14.727454391051822,"column":"e","height":14.727455774485804,"details":[],"templateID":0.3018125193655301,"tool_label":"Grid Tool"},{"x":255.33934166603294,"y":369.1068603480512,"row":4,"tool":0,"frame":0,"width":42.34143137427401,"column":"f","height":14.727455774485804,"details":[],"templateID":0.3018125193655301,"tool_label":"Grid Tool"},{"x":301.3626366380699,"y":369.1068603480512,"row":4,"tool":0,"frame":0,"width":40.500499575392496,"column":"g","height":14.727455774485804,"details":[],"templateID":0.3018125193655301,"tool_label":"Grid Tool"},{"x":347.38593161010687,"y":369.1068603480512,"row":4,"tool":0,"frame":0,"width":23.932113385459218,"column":"h","height":14.727455774485804,"details":[],"templateID":0.3018125193655301,"tool_label":"Grid Tool"},{"x":374.999908593329,"y":369.1068603480512,"row":4,"tool":0,"frame":0,"width":46.02329497203698,"column":"i","height":14.727455774485804,"details":[],"templateID":0.3018125193655301,"tool_label":"Grid Tool"},{"x":424.70506716312894,"y":369.1068603480512,"row":4,"tool":0,"frame":0,"width":22.09118158657776,"column":"j","height":14.727455774485804,"details":[],"templateID":0.3018125193655301,"tool_label":"Grid Tool"},{"x":108.06479775551462,"y":383.834316122537,"row":5,"tool":0,"frame":0,"width":53.387022167562876,"column":"a","height":14.727455774485861,"details":[],"templateID":0.771453910229662,"tool_label":"Grid Tool"},{"x":165.13368352084046,"y":383.834316122537,"row":5,"tool":0,"frame":0,"width":23.932113385459218,"column":"b","height":14.727455774485861,"details":[],"templateID":0.771453910229662,"tool_label":"Grid Tool"},{"x":190.90672870518117,"y":383.834316122537,"row":5,"tool":0,"frame":0,"width":16.568386189933307,"column":"c","height":14.727455774485861,"details":[],"templateID":0.771453910229662,"tool_label":"Grid Tool"},{"x":209.31604669399593,"y":383.834316122537,"row":5,"tool":0,"frame":0,"width":22.09118158657776,"column":"d","height":14.727455774485861,"details":[],"templateID":0.771453910229662,"tool_label":"Grid Tool"},{"x":236.93002367721812,"y":383.834316122537,"row":5,"tool":0,"frame":0,"width":14.727454391051822,"column":"e","height":14.727455774485861,"details":[],"templateID":0.771453910229662,"tool_label":"Grid Tool"},{"x":255.33934166603294,"y":383.834316122537,"row":5,"tool":0,"frame":0,"width":42.34143137427401,"column":"f","height":14.727455774485861,"details":[],"templateID":0.771453910229662,"tool_label":"Grid Tool"},{"x":301.3626366380699,"y":383.834316122537,"row":5,"tool":0,"frame":0,"width":40.500499575392496,"column":"g","height":14.727455774485861,"details":[],"templateID":0.771453910229662,"tool_label":"Grid Tool"},{"x":347.38593161010687,"y":383.834316122537,"row":5,"tool":0,"frame":0,"width":23.932113385459218,"column":"h","height":14.727455774485861,"details":[],"templateID":0.771453910229662,"tool_label":"Grid Tool"},{"x":374.999908593329,"y":383.834316122537,"row":5,"tool":0,"frame":0,"width":46.02329497203698,"column":"i","height":14.727455774485861,"details":[],"templateID":0.771453910229662,"tool_label":"Grid Tool"},{"x":424.70506716312894,"y":383.834316122537,"row":5,"tool":0,"frame":0,"width":22.09118158657776,"column":"j","height":14.727455774485861,"details":[],"templateID":0.771453910229662,"tool_label":"Grid Tool"},{"x":108.06479775551462,"y":398.5617718970229,"row":6,"tool":0,"frame":0,"width":53.387022167562876,"column":"a","height":16.568387746296537,"details":[],"templateID":0.9244960032063922,"tool_label":"Grid Tool"},{"x":165.13368352084046,"y":398.5617718970229,"row":6,"tool":0,"frame":0,"width":23.932113385459218,"column":"b","height":16.568387746296537,"details":[],"templateID":0.9244960032063922,"tool_label":"Grid Tool"},{"x":190.90672870518117,"y":398.5617718970229,"row":6,"tool":0,"frame":0,"width":16.568386189933307,"column":"c","height":16.568387746296537,"details":[],"templateID":0.9244960032063922,"tool_label":"Grid Tool"},{"x":209.31604669399593,"y":398.5617718970229,"row":6,"tool":0,"frame":0,"width":22.09118158657776,"column":"d","height":16.568387746296537,"details":[],"templateID":0.9244960032063922,"tool_label":"Grid Tool"},{"x":236.93002367721812,"y":398.5617718970229,"row":6,"tool":0,"frame":0,"width":14.727454391051822,"column":"e","height":16.568387746296537,"details":[],"templateID":0.9244960032063922,"tool_label":"Grid Tool"},{"x":255.33934166603294,"y":398.5617718970229,"row":6,"tool":0,"frame":0,"width":42.34143137427401,"column":"f","height":16.568387746296537,"details":[],"templateID":0.9244960032063922,"tool_label":"Grid Tool"},{"x":301.3626366380699,"y":398.5617718970229,"row":6,"tool":0,"frame":0,"width":40.500499575392496,"column":"g","height":16.568387746296537,"details":[],"templateID":0.9244960032063922,"tool_label":"Grid Tool"},{"x":347.38593161010687,"y":398.5617718970229,"row":6,"tool":0,"frame":0,"width":23.932113385459218,"column":"h","height":16.568387746296537,"details":[],"templateID":0.9244960032063922,"tool_label":"Grid Tool"},{"x":374.999908593329,"y":398.5617718970229,"row":6,"tool":0,"frame":0,"width":46.02329497203698,"column":"i","height":16.568387746296537,"details":[],"templateID":0.9244960032063922,"tool_label":"Grid Tool"},{"x":424.70506716312894,"y":398.5617718970229,"row":6,"tool":0,"frame":0,"width":22.09118158657776,"column":"j","height":16.568387746296537,"details":[],"templateID":0.9244960032063922,"tool_label":"Grid Tool"},{"x":108.06479775551462,"y":415.1301596433194,"row":7,"tool":0,"frame":0,"width":53.387022167562876,"column":"a","height":12.886523802675129,"details":[],"templateID":0.746172799678753,"tool_label":"Grid Tool"},{"x":165.13368352084046,"y":415.1301596433194,"row":7,"tool":0,"frame":0,"width":23.932113385459218,"column":"b","height":12.886523802675129,"details":[],"templateID":0.746172799678753,"tool_label":"Grid Tool"},{"x":190.90672870518117,"y":415.1301596433194,"row":7,"tool":0,"frame":0,"width":16.568386189933307,"column":"c","height":12.886523802675129,"details":[],"templateID":0.746172799678753,"tool_label":"Grid Tool"},{"x":209.31604669399593,"y":415.1301596433194,"row":7,"tool":0,"frame":0,"width":22.09118158657776,"column":"d","height":12.886523802675129,"details":[],"templateID":0.746172799678753,"tool_label":"Grid Tool"},{"x":236.93002367721812,"y":415.1301596433194,"row":7,"tool":0,"frame":0,"width":14.727454391051822,"column":"e","height":12.886523802675129,"details":[],"templateID":0.746172799678753,"tool_label":"Grid Tool"},{"x":255.33934166603294,"y":415.1301596433194,"row":7,"tool":0,"frame":0,"width":42.34143137427401,"column":"f","height":12.886523802675129,"details":[],"templateID":0.746172799678753,"tool_label":"Grid Tool"},{"x":301.3626366380699,"y":415.1301596433194,"row":7,"tool":0,"frame":0,"width":40.500499575392496,"column":"g","height":12.886523802675129,"details":[],"templateID":0.746172799678753,"tool_label":"Grid Tool"},{"x":347.38593161010687,"y":415.1301596433194,"row":7,"tool":0,"frame":0,"width":23.932113385459218,"column":"h","height":12.886523802675129,"details":[],"templateID":0.746172799678753,"tool_label":"Grid Tool"},{"x":374.999908593329,"y":415.1301596433194,"row":7,"tool":0,"frame":0,"width":46.02329497203698,"column":"i","height":12.886523802675129,"details":[],"templateID":0.746172799678753,"tool_label":"Grid Tool"},{"x":424.70506716312894,"y":415.1301596433194,"row":7,"tool":0,"frame":0,"width":22.09118158657776,"column":"j","height":12.886523802675129,"details":[],"templateID":0.746172799678753,"tool_label":"Grid Tool"},{"x":108.06479775551462,"y":428.01668344599454,"row":8,"tool":0,"frame":0,"width":53.387022167562876,"column":"a","height":16.568387746296537,"details":[],"templateID":0.40872129767263465,"tool_label":"Grid Tool"},{"x":165.13368352084046,"y":428.01668344599454,"row":8,"tool":0,"frame":0,"width":23.932113385459218,"column":"b","height":16.568387746296537,"details":[],"templateID":0.40872129767263465,"tool_label":"Grid Tool"},{"x":190.90672870518117,"y":428.01668344599454,"row":8,"tool":0,"frame":0,"width":16.568386189933307,"column":"c","height":16.568387746296537,"details":[],"templateID":0.40872129767263465,"tool_label":"Grid Tool"},{"x":209.31604669399593,"y":428.01668344599454,"row":8,"tool":0,"frame":0,"width":22.09118158657776,"column":"d","height":16.568387746296537,"details":[],"templateID":0.40872129767263465,"tool_label":"Grid Tool"},{"x":236.93002367721812,"y":428.01668344599454,"row":8,"tool":0,"frame":0,"width":14.727454391051822,"column":"e","height":16.568387746296537,"details":[],"templateID":0.40872129767263465,"tool_label":"Grid Tool"},{"x":255.33934166603294,"y":428.01668344599454,"row":8,"tool":0,"frame":0,"width":42.34143137427401,"column":"f","height":16.568387746296537,"details":[],"templateID":0.40872129767263465,"tool_label":"Grid Tool"},{"x":301.3626366380699,"y":428.01668344599454,"row":8,"tool":0,"frame":0,"width":40.500499575392496,"column":"g","height":16.568387746296537,"details":[],"templateID":0.40872129767263465,"tool_label":"Grid Tool"},{"x":347.38593161010687,"y":428.01668344599454,"row":8,"tool":0,"frame":0,"width":23.932113385459218,"column":"h","height":16.568387746296537,"details":[],"templateID":0.40872129767263465,"tool_label":"Grid Tool"},{"x":374.999908593329,"y":428.01668344599454,"row":8,"tool":0,"frame":0,"width":46.02329497203698,"column":"i","height":16.568387746296537,"details":[],"templateID":0.40872129767263465,"tool_label":"Grid Tool"},{"x":424.70506716312894,"y":428.01668344599454,"row":8,"tool":0,"frame":0,"width":22.09118158657776,"column":"j","height":16.568387746296537,"details":[],"templateID":0.40872129767263465,"tool_label":"Grid Tool"},{"x":108.06479775551462,"y":444.5850711922911,"row":9,"tool":0,"frame":0,"width":53.387022167562876,"column":"a","height":16.568387746296594,"details":[],"templateID":0.5411117423386744,"tool_label":"Grid Tool"},{"x":165.13368352084046,"y":444.5850711922911,"row":9,"tool":0,"frame":0,"width":23.932113385459218,"column":"b","height":16.568387746296594,"details":[],"templateID":0.5411117423386744,"tool_label":"Grid Tool"},{"x":190.90672870518117,"y":444.5850711922911,"row":9,"tool":0,"frame":0,"width":16.568386189933307,"column":"c","height":16.568387746296594,"details":[],"templateID":0.5411117423386744,"tool_label":"Grid Tool"},{"x":209.31604669399593,"y":444.5850711922911,"row":9,"tool":0,"frame":0,"width":22.09118158657776,"column":"d","height":16.568387746296594,"details":[],"templateID":0.5411117423386744,"tool_label":"Grid Tool"},{"x":236.93002367721812,"y":444.5850711922911,"row":9,"tool":0,"frame":0,"width":14.727454391051822,"column":"e","height":16.568387746296594,"details":[],"templateID":0.5411117423386744,"tool_label":"Grid Tool"},{"x":255.33934166603294,"y":444.5850711922911,"row":9,"tool":0,"frame":0,"width":42.34143137427401,"column":"f","height":16.568387746296594,"details":[],"templateID":0.5411117423386744,"tool_label":"Grid Tool"},{"x":301.3626366380699,"y":444.5850711922911,"row":9,"tool":0,"frame":0,"width":40.500499575392496,"column":"g","height":16.568387746296594,"details":[],"templateID":0.5411117423386744,"tool_label":"Grid Tool"},{"x":347.38593161010687,"y":444.5850711922911,"row":9,"tool":0,"frame":0,"width":23.932113385459218,"column":"h","height":16.568387746296594,"details":[],"templateID":0.5411117423386744,"tool_label":"Grid Tool"},{"x":374.999908593329,"y":444.5850711922911,"row":9,"tool":0,"frame":0,"width":46.02329497203698,"column":"i","height":16.568387746296594,"details":[],"templateID":0.5411117423386744,"tool_label":"Grid Tool"},{"x":424.70506716312894,"y":444.5850711922911,"row":9,"tool":0,"frame":0,"width":22.09118158657776,"column":"j","height":16.568387746296594,"details":[],"templateID":0.5411117423386744,"tool_label":"Grid Tool"},{"x":108.06479775551462,"y":461.1534589385877,"row":10,"tool":0,"frame":0,"width":53.387022167562876,"column":"a","height":18.40931971810727,"details":[],"templateID":0.2466033540416921,"tool_label":"Grid Tool"},{"x":165.13368352084046,"y":461.1534589385877,"row":10,"tool":0,"frame":0,"width":23.932113385459218,"column":"b","height":18.40931971810727,"details":[],"templateID":0.2466033540416921,"tool_label":"Grid Tool"},{"x":190.90672870518117,"y":461.1534589385877,"row":10,"tool":0,"frame":0,"width":16.568386189933307,"column":"c","height":18.40931971810727,"details":[],"templateID":0.2466033540416921,"tool_label":"Grid Tool"},{"x":209.31604669399593,"y":461.1534589385877,"row":10,"tool":0,"frame":0,"width":22.09118158657776,"column":"d","height":18.40931971810727,"details":[],"templateID":0.2466033540416921,"tool_label":"Grid Tool"},{"x":236.93002367721812,"y":461.1534589385877,"row":10,"tool":0,"frame":0,"width":14.727454391051822,"column":"e","height":18.40931971810727,"details":[],"templateID":0.2466033540416921,"tool_label":"Grid Tool"},{"x":255.33934166603294,"y":461.1534589385877,"row":10,"tool":0,"frame":0,"width":42.34143137427401,"column":"f","height":18.40931971810727,"details":[],"templateID":0.2466033540416921,"tool_label":"Grid Tool"},{"x":301.3626366380699,"y":461.1534589385877,"row":10,"tool":0,"frame":0,"width":40.500499575392496,"column":"g","height":18.40931971810727,"details":[],"templateID":0.2466033540416921,"tool_label":"Grid Tool"},{"x":347.38593161010687,"y":461.1534589385877,"row":10,"tool":0,"frame":0,"width":23.932113385459218,"column":"h","height":18.40931971810727,"details":[],"templateID":0.2466033540416921,"tool_label":"Grid Tool"},{"x":374.999908593329,"y":461.1534589385877,"row":10,"tool":0,"frame":0,"width":46.02329497203698,"column":"i","height":18.40931971810727,"details":[],"templateID":0.2466033540416921,"tool_label":"Grid Tool"},{"x":424.70506716312894,"y":461.1534589385877,"row":10,"tool":0,"frame":0,"width":22.09118158657776,"column":"j","height":18.40931971810727,"details":[],"templateID":0.2466033540416921,"tool_label":"Grid Tool"},{"x":108.06479775551462,"y":479.56277865669495,"row":11,"tool":0,"frame":0,"width":53.387022167562876,"column":"a","height":11.045591830864396,"details":[],"templateID":0.9050835482425186,"tool_label":"Grid Tool"},{"x":165.13368352084046,"y":479.56277865669495,"row":11,"tool":0,"frame":0,"width":23.932113385459218,"column":"b","height":11.045591830864396,"details":[],"templateID":0.9050835482425186,"tool_label":"Grid Tool"},{"x":190.90672870518117,"y":479.56277865669495,"row":11,"tool":0,"frame":0,"width":16.568386189933307,"column":"c","height":11.045591830864396,"details":[],"templateID":0.9050835482425186,"tool_label":"Grid Tool"},{"x":209.31604669399593,"y":479.56277865669495,"row":11,"tool":0,"frame":0,"width":22.09118158657776,"column":"d","height":11.045591830864396,"details":[],"templateID":0.9050835482425186,"tool_label":"Grid Tool"},{"x":236.93002367721812,"y":479.56277865669495,"row":11,"tool":0,"frame":0,"width":14.727454391051822,"column":"e","height":11.045591830864396,"details":[],"templateID":0.9050835482425186,"tool_label":"Grid Tool"},{"x":255.33934166603294,"y":479.56277865669495,"row":11,"tool":0,"frame":0,"width":42.34143137427401,"column":"f","height":11.045591830864396,"details":[],"templateID":0.9050835482425186,"tool_label":"Grid Tool"},{"x":301.3626366380699,"y":479.56277865669495,"row":11,"tool":0,"frame":0,"width":40.500499575392496,"column":"g","height":11.045591830864396,"details":[],"templateID":0.9050835482425186,"tool_label":"Grid Tool"},{"x":347.38593161010687,"y":479.56277865669495,"row":11,"tool":0,"frame":0,"width":23.932113385459218,"column":"h","height":11.045591830864396,"details":[],"templateID":0.9050835482425186,"tool_label":"Grid Tool"},{"x":374.999908593329,"y":479.56277865669495,"row":11,"tool":0,"frame":0,"width":46.02329497203698,"column":"i","height":11.045591830864396,"details":[],"templateID":0.9050835482425186,"tool_label":"Grid Tool"},{"x":424.70506716312894,"y":479.56277865669495,"row":11,"tool":0,"frame":0,"width":22.09118158657776,"column":"j","height":11.045591830864396,"details":[],"templateID":0.9050835482425186,"tool_label":"Grid Tool"},{"x":108.06479775551462,"y":490.60837048755934,"row":12,"tool":0,"frame":0,"width":53.387022167562876,"column":"a","height":14.727455774485804,"details":[],"templateID":0.09533444043275785,"tool_label":"Grid Tool"},{"x":165.13368352084046,"y":490.60837048755934,"row":12,"tool":0,"frame":0,"width":23.932113385459218,"column":"b","height":14.727455774485804,"details":[],"templateID":0.09533444043275785,"tool_label":"Grid Tool"},{"x":190.90672870518117,"y":490.60837048755934,"row":12,"tool":0,"frame":0,"width":16.568386189933307,"column":"c","height":14.727455774485804,"details":[],"templateID":0.09533444043275785,"tool_label":"Grid Tool"},{"x":209.31604669399593,"y":490.60837048755934,"row":12,"tool":0,"frame":0,"width":22.09118158657776,"column":"d","height":14.727455774485804,"details":[],"templateID":0.09533444043275785,"tool_label":"Grid Tool"},{"x":236.93002367721812,"y":490.60837048755934,"row":12,"tool":0,"frame":0,"width":14.727454391051822,"column":"e","height":14.727455774485804,"details":[],"templateID":0.09533444043275785,"tool_label":"Grid Tool"},{"x":255.33934166603294,"y":490.60837048755934,"row":12,"tool":0,"frame":0,"width":42.34143137427401,"column":"f","height":14.727455774485804,"details":[],"templateID":0.09533444043275785,"tool_label":"Grid Tool"},{"x":301.3626366380699,"y":490.60837048755934,"row":12,"tool":0,"frame":0,"width":40.500499575392496,"column":"g","height":14.727455774485804,"details":[],"templateID":0.09533444043275785,"tool_label":"Grid Tool"},{"x":347.38593161010687,"y":490.60837048755934,"row":12,"tool":0,"frame":0,"width":23.932113385459218,"column":"h","height":14.727455774485804,"details":[],"templateID":0.09533444043275785,"tool_label":"Grid Tool"},{"x":374.999908593329,"y":490.60837048755934,"row":12,"tool":0,"frame":0,"width":46.02329497203698,"column":"i","height":14.727455774485804,"details":[],"templateID":0.09533444043275785,"tool_label":"Grid Tool"},{"x":424.70506716312894,"y":490.60837048755934,"row":12,"tool":0,"frame":0,"width":22.09118158657776,"column":"j","height":14.727455774485804,"details":[],"templateID":0.09533444043275785,"tool_label":"Grid Tool"}]}]'

const App = () => (
    <div className='main-app container'>
        <div className="row">
          <div className="column column-80 column-offset-10">
            <h1>Swansonate!</h1>
            <p>We all love Ali Swanson. We all love JSON. But Ali Swanson hates JSON. Help me make Ali happy by building a tool that will help people build sensible CSV files from JSON files.</p>
            <textarea style={{'height': '200px'}}>{blob}</textarea>

            <p></p>

            <table>
              <thead></thead>
                <th>blah</th>
                <th>blah</th>
                <th>blah</th>
              <tbody></tbody>
                <td>blah</td>
                <td>blah</td>
                <td>blah</td>
            </table>
          </div>
        </div>
    </div>
);

export default App;
